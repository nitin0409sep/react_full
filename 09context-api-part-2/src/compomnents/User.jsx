import React from "react";
import { userContact } from "../context/UserContactContext";

const User = () => {
  let { firstname, lastname } = userContact();
  return (
    <div className="text-2xl">
      User Name - {firstname} {lastname}
    </div>
  );
};

export default User;
