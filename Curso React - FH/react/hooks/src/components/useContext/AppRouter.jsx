import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import Navbar from "./components/Navbar";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/about" element={<AboutScreen />} />
          <Route path="*" element={ <Navigate to="/"/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
