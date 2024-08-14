import React, { useState } from "react";
import ContactContext from "./ContactContext";

const ContactContextProvider = ({ children }) => {
  const [mob, setMob] = useState(null);

  return (
    <>
      <ContactContext.Provider value={{ mob, setMob }}>
        {children}
      </ContactContext.Provider>
    </>
  );
};

export default ContactContextProvider;
