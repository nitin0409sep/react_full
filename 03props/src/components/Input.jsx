import React from "react";

const Input = ({ userName, setUserNameValue }) => {
  return (
    <>
      <div>User Name - {userName}</div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserNameValue(e.target.value)}
      />
    </>
  );
};

export default Input;
