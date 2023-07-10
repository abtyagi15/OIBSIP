import React from "react";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="relative">
          <div className="absolute z-[100]">{children}</div>
          <Background className="absolute z-[-100]" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
