import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClassName =
    "shadow-slate-100 underline-offset-4 text-green-500 transition-all";
  return (
    <nav className="flex  flex-row w-full bg-black text-white font-bold justify-between">
      <Link
        to="/"
        className="flex flex-row w-1/4 max-w-[10em] justify-evenly items-center m-5"
      >
        <div className="logo w-5 h-5"></div>
        <span className="text-white font-[900]">useContext</span>
      </Link>
      <ul className="flex justify-around w-2/4 max-w-xs m-5">
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? activeClassName : undefined;
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
