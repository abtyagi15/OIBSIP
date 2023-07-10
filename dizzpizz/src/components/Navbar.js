import React from "react";
import Logo from "../assests/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around p-4 bg-[#121618] text-white">
      <Link to="/">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-[40px] h-[40px]" />
          <p className="logo">DizzPizz</p>
        </div>
      </Link>
      <div>
        <Link to="/login">
          <button className="mx-1 border px-2 py-1 rounded-sm">Login</button>
        </Link>
        <Link to="/signup">
          <button className="mx-1 border px-2 py-1 rounded-sm">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
