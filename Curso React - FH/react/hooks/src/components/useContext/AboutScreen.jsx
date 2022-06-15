import React, { useContext } from "react";
import UserContext from "./context/UserContext";

const AboutScreen = () => {
  const {user,setUser} = useContext(UserContext);
  return (
    <div>
      <h1>AboutScreen</h1>
      <hr />
      <pre>
      {JSON.stringify(user,null,3)}
      </pre>
      <button className="btn bg-yellow-500" onClick={() => setUser({})}>Logout</button>
    </div>
  );
};

export default AboutScreen;
