import axios from "axios";
import React, { useEffect, useState } from "react";

const User = ({ query = "" }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    (async () => {
      const url =
        query.length > 0
          ? `http://localhost:5000/user?search=${query}`
          : "http://localhost:5000/user";

      const res = await axios.get(url);

      setUserData(res?.data?.users ?? []);
    })();
  }, [query]);

  return (
    <>
      {userData.map((val) => (
        <h4 key={val.id}>{val.name}</h4>
      ))}
    </>
  );
};

export default User;
