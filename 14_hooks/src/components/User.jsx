import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Children from "./Children";

const User = ({ query = "" }) => {
  const [userData, setUserData] = useState([]);
  const [counter, setCounter] = useState(0);

  const fetchUsers = useCallback(async () => {
    const url =
      query.length > 0
        ? `http://localhost:5000/user?search=${query}`
        : "http://localhost:5000/user";

    const res = await axios.get(url);
    setUserData(res?.data?.users ?? []);
  }, [query]);

  function increment() {
    setCounter((prev) => prev + 1);
  }

  return (
    <>
      <Children fetchUsers={fetchUsers}></Children>

      {userData.map((val) => (
        <h4 key={val.id}>{val.name}</h4>
      ))}

      <h3>Counter - {counter}</h3>

      <button
        onClick={increment}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Increment
      </button>
    </>
  );
};

export default User;
