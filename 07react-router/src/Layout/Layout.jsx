import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../index";

const Layout = () => {
  return (
    <>
      <div className="px-20 h-screen w-screen overflow-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
