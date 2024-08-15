import React from "react";
import { userContact } from "../context/UserContactContext";

const Contact = () => {
  const { firstname, lastname, mob } = userContact();

  mob("Nitin", "Verma");

  return (
    <div>
      Contact {firstname} {lastname}
    </div>
  );
};

export default Contact;
