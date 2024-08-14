import { Outlet } from "react-router-dom";
import React, { useContext } from "react";
import ContactContextProvider from "../context/ContactContextProvider";
import User from "./User";
import Mobile from "./Mobile";

const Contact = () => {
  return (
    <>
      <ContactContextProvider>
        <Outlet />
      </ContactContextProvider>
    </>
  );
};

export default Contact;
