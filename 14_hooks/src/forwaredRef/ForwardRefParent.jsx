import React, { useRef } from "react";
import InputChild from "./InputChild";

const ForwardRefParent = () => {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
    ref.current.callMe();
  }

  return (
    <>
      Parent Form
      <br />
      <br />
      <InputChild placeholder="Enter your name" ref={ref} />
      <br />
      <button onClick={handleClick}>Edit</button>
    </>
  );
};

export default ForwardRefParent;
