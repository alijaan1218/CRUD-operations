import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
function Index(){
    const [isLogin, setIsLogin] = useState(false);
    const setLogin = (newState) => {
      setIsLogin(newState);
    }
    return (
        <>
       {isLogin && <Login login={setLogin}/>}
        {!isLogin && <SignUp login={setLogin}/>}
        </>
    )
}

export default Index;