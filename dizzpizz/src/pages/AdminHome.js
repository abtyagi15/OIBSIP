import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminTopbar from "../components/AdminTopbar";

const AdminHome = () => {
  return (
    <div className="text-black flex">
      <AdminSidebar />
      <div className="flex flex-col w-full">
        <AdminTopbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminHome;
