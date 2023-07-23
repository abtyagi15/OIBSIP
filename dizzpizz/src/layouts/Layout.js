import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <div>
      {(location.pathname === "/" || location.pathname === "/login" 
        || location.pathname === "/signup" || location.pathname === "/user"
        ) && 
        <>
          <Navbar />
          <div className="background-container relative h-[700px] flex justify-center items-center">
            <div className="z-[100] absolute w-[71%]">
              <Outlet/>
            </div>
            <Background />
          </div>
          <Footer />
        </>
      }
    </div>
  );
};

export default Layout;
