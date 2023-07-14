import React from "react";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="background-container relative h-[700px] flex justify-center items-center">
        <div className="z-[100] absolute w-[71%]">{children}</div>
        <Background />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
