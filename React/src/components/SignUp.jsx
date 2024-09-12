//import React from "react";
import axios from "axios";
import Select from "react-select";
import { useState, useEffect } from "react";
import PropTypes from "react";
SignUp.propTypes = {
    setLogin: PropTypes.func,
}
function SignUp({ setLogin }) {

    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [address, setAddress] = useState(null);
    const [roles, setRoles] = useState(null);
    const [drop, setDrop] = useState([]);
    const getRoles = async () => {
        const { data } = await axios.get("http://localhost:3000/user/getAllUser");
        if (data.error) {
            return alert('No role extis');
        }
        let dropDown = [];
        data.response.map((role) => {
            const a = {
                label: role.ROLE.roleName,
                value: role.ROLE.roleId,
            }
            console.log(a);
            dropDown.push(a);
        })
        console.log("check", dropDown);
        setDrop(dropDown);
    }
    useEffect(() => {
        void getRoles();
    }, [])

    return (
        <>
            <div className="bg-white w-full h-full flex justify-center items-center">
                <div className=" bg-gray-300  h-3/4 p-2 w-1/3 rounded-md gap-4">
                    <div className="h-1/6 flex justify-center items-center">
                        <h1 className="font-semibold text-2xl">SignUp Page</h1>
                    </div>
                    <div className=" h-3/2 flex flex-col py-6">
                        <label>Username:</label>
                        <input type="text" placeholder="Enter username here" required className="rounded-md" onChange={(e) => {
                            setUserName(e.target.value);
                        }} />
                        <label>Password:</label>
                        <input type="password" required className="rounded-md" placeholder="Enter your password here" onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                        <label>Address:</label>
                        <input type="password" required className="rounded-md" placeholder="Enter your address here" onChange={(e) => {
                            setAddress(e.target.value);
                        }} />
                        <Select className="rounded-md text-gray-500 focus:outline-none py-4"
                            inSearchable={true}
                            options={drop}
                            onChange={(e) => {
                                console.log(e.value)
                                setRoles(e.value);
                            }}
                        />
                        <p>{"Already have an account!"} <span className="text-blue-600 underline cursor-pointer" onClick={() => { setLogin(true) }}> Sign In</span></p>
                    </div>
                    <div className=" h-1/6 flex justify-center items-center">
                        <button className="font-semibold bg-green-600 text-3xl focus:outline-dotted rounded-md disabled:bg-gray-50" disabled={!(userName && password && address && roles)} onClick={() => {
                            console.log(userName, " ", password, " ", address, " ", roles, " ");
                        }}>Sign Up</button>
                    </div>
                </div>
            </div>

        </>
    );
}
export default SignUp;