import PropTypes, { useState } from "react";
import axios from "axios";
Login.propTypes = {
  login: PropTypes.func,
};

function Login(props) {
  const [userName, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  let login = async () => {
    console.log("user", userName);
    console.log("password", password);
    const { data } = await axios.post("http://localhost:3000/auth/login", {
      userName,
      password,
    });
    console.log(data);
    if (data.error) {
      return alert("Invalid Credentials");
    }
    return alert("Successfully logged in.");
  };
  return (
    <>
      <div className="bg-white w-full h-full flex justify-center items-center">
        <div className=" bg-gray-300  h-3/4 w-1/3 rounded-md">
          <div className="h-1/4 flex justify-center items-center">
            <h1 className="font-semibold text-2xl">Login Page</h1>
          </div>
          <div className=" h-1/2 flex flex-col p-4 gap-4">
            <label>Username:</label>
            <input
              type="text"
              placeholder="Enter username here..."
              required
              className="rounded-md"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
            <label>Password:</label>
            <input
              type="password"
              required
              className="rounded-md"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p>
              {"Don't have an account?"}{" "}
              <span
                className="text-blue-600 underline cursor-pointer"
                onClick={() => {
                  props.login(false);
                }}
              >
                {" "}
                Go to Sign Up
              </span>
            </p>
          </div>
          <div className=" h-1/4 flex justify-center items-center">
            <button
              className="font-semibold bg-green-600 text-3xl rounded-md"
              onClick={login}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
