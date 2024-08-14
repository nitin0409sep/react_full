import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const ActiveLink = ({ to, children }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${
            isActive ? "text-orange-700" : "text-gray-700"
          } text-3xl hover:text-orange-600`
        }
      >
        {children}
      </NavLink>
    );
  };

  return (
    <>
      <div className="flex justify-between text-2xl w-full h-24 items-center px-5">
        <div className="text-3xl hover:text-orange-600">
          <Link to="/">😎MineLogo😎</Link>
        </div>
        <div className="logo flex gap-10">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/about">About</ActiveLink>
          <ActiveLink to="/contact">Contact</ActiveLink>
          <ActiveLink to="/user/1">User</ActiveLink>
          <ActiveLink to="/github">Github</ActiveLink>
        </div>
        <div className="flex gap-5 px-3">
          <button className="hover:text-orange-600 font-medium">Log in</button>
          <button className="p-3 rounded-2xl px-6 bg-orange-700 text-white">
            <Link to="/">Get Started</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
