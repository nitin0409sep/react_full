import React from "react";
import { userContact } from "../context/UserContactContext";

const Home = () => {
  let { firstname, lastname } = userContact();

  return (
    <div>
      Home {firstname} {lastname}
    </div>
  );
};

export default Home;
