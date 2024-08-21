import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const About = () => {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [showUser, setShowUser] = useState(false);

  // const [isMounted, setIsMounted] = useState(true);
  const isMounted = useRef();

  const fetchUsers = async () => {
    setLoader(true);

    setTimeout(async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const users = res.data.map((user) => user.name);

      if (isMounted.current) {
        setUsers(users);
        setShowUser(true);
      }
      setLoader(false);
    }, 3000);
  };

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <>
      <button
        style={{ marginBottom: "10px" }}
        onClick={fetchUsers}
        disabled={users.length}
      >
        Fetch Users
      </button>
      {loader ? (
        <div>
          <img
            src="./loader.svg"
            alt="loader"
            height={"100px"}
            width={"100px"}
          />
        </div>
      ) : (
        showUser && users.map((user) => <h6 key={user}>{user}</h6>)
      )}
    </>
  );
};

export default About;
