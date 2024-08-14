import React, { useContext } from "react";
import ContactContext from "../context/ContactContext";

const Mobile = () => {
  const { mob } = useContext(ContactContext);
  if (!mob) return <>Please Add Mobile Number</>;

  return <div>Mobile {mob?.val}</div>;
};

export default Mobile;
