import React, { useState } from "react";
import ToggleContext from "./ToggleContext";

const ToggleContextProvider = ({ children }) => {
  const [check, setCheck] = useState(true);

  return (
    <>
      <ToggleContext.Provider value={{ check, setCheck }}>
        {children}
      </ToggleContext.Provider>
    </>
  );
};

export default ToggleContextProvider;
