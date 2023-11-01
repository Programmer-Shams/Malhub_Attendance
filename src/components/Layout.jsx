import React from "react";
import { Outlet, RouterProvider } from "react-router";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="flex">
      <SideBar />
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
