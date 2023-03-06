import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import SideBar from "./SideBar";

const AdminPanel = () => {
  return (
    <>
      <AdminHeader />
      <div className="admin-panel container">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
};

export default AdminPanel;
