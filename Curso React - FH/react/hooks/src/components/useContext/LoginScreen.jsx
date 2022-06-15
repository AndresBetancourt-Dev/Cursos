import React, { useContext } from "react";
import UserContext from "./context/UserContext";

const LoginScreen = () => {

  const {setUser} = useContext(UserContext);


  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-blue" onClick={() => setUser({name : 'Andrés David', age : 22, vix : 'hey'})}>Login</button>
    </div>
  );
};

export default LoginScreen;
