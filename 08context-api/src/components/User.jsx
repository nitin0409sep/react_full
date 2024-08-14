import React from "react";
import { useContext } from "react";
import ContactContext from "../context/ContactContext";
import UserContext from "../context/UserContext";
import { Outlet } from "react-router-dom";

const User = () => {
  const { mob, setMob } = useContext(ContactContext);

  // const { user } = useContext(UserContext);

  return (
    <div>
      <label htmlFor="mobile"> Mobile Number </label>
      <input
        type="number"
        min={10}
        max={10}
        placeholder="Enter your mobile number!!!"
        onChange={(e) => setMob({ val: e.target.value })}
      />

      {mob?.val}

      <br />
      <br />
      <Outlet></Outlet>

      {/* <h1>{mob}</h1> */}
    </div>
  );
};

export default User;
