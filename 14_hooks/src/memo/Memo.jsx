import React, { useMemo, useState } from "react";
import { Children } from "./Children";

const Memo = () => {
  //! Instead of wrapping Child Component in memo, you could wrap the <List /> JSX node itself in useMemo:
  //!   const children = useMemo(() => <List items={visibleTodos} />, [visibleTodos]);
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);

  //   const child = useMemo(() => <Children val={value} />, [value]);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  const handleSetValue = () => {
    setValue((prev) => prev + 1);
  };

  return (
    <>
      <Children val={value}></Children>
      <br />
      Counter - {counter}
      <br />
      <br />
      <button onClick={handleClick}>Increment</button>
      <br />
      <br />
      <button onClick={handleSetValue}>SetValue</button>
    </>
  );
};

export default Memo;
