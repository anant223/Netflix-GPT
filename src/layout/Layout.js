import React from "react";
import { Footer, Header } from "../components/Main";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <Header/>
        <Outlet/>
      <Footer />
    </div>
  );
};

export default Layout;
