import React, { useState } from "react";
import AppRouter from "./AppRouter";
import UserContext from "./context/UserContext";
import "./styles.css";

const MainApp = () => {

  const [user,setUser] = useState({
    name: "Andrés",
    age: 21,
  });

  return (
    <UserContext.Provider value={{user,setUser}}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
