import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //How to send/set data in in User Context
  const { setUser } = useContext(UserContext);

  const handelSubmit = (e) => {
    e.preventDefault();

    //How to send/set data in in User Context
    setUser({ username, password });
  };

  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <br />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <br />
      <br />
      <button onClick={handelSubmit}>Submit</button>
      <br />
      <br />
    </>
  );
};

export default Login;
