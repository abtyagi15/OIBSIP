import React from "react";
import Logo from "../assests/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex justify-around p-4 bg-[#121618] text-white items-center">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-[40px] h-[40px]" />
          <p className="logo text-[18px] mt-[6px] py-1">DizzPizz</p>
        </div>
      </Link>
      {(location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname === "/signup") 
        && (
        <div>
          <Link to="/login">
            <button className="mx-1 border px-2 py-1 rounded-sm hover:text-[#fac564] hover:border-[#fac564]">Login</button>
          </Link>
          <Link to="/signup">
            <button className="mx-1 border px-2 py-1 rounded-sm hover:text-[#fac564] hover:border-[#fac564]">Signup</button>
          </Link>
        </div>
      )}
      {(location.pathname === "/user" ||
        location.pathname === "/admin") 
        && (
        <div>
          <Link to="/login">
            <button className="mx-1 border px-2 py-1 rounded-sm">hello</button>
          </Link>
          <Link to="/signup">
            <button className="mx-1 border px-2 py-1 rounded-sm">world</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
