import React, { useContext } from "react";
import UserContext from "./context/UserContext";

const HomeScreen = () => {

  const userContext = useContext(UserContext);
  return (
    <div>
      <h1>HomeScreen</h1>
      <hr />
      <pre>
      {JSON.stringify(userContext,null,3)}
      </pre>
    </div>
  );
};

export default HomeScreen;
