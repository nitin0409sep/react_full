import { useState } from "react";

function App() {
  // let counter = 5;

  let [counter, setCounter] = useState(5); //! How the changes will be shown on UI

  function incrementValue() {
    if (counter < 20) {
      //! usestate, sends data/updates in batches

      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);

      //! setters (like setCounter) - Accepts callback
      setCounter((prevCounter) => prevCounter + 1); //! prevCounter - Exsisting State or Last Updated State
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
    }
  }

  function decrementValue() {
    if (counter > 0) {
      counter--;
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>Hello Boss</h1>
      <h2>Counter Value : {counter}</h2>
      <button style={{ margin: "0px 10px 0px 0px" }} onClick={incrementValue}>
        Increment
      </button>
      <button onClick={decrementValue}>Decrement</button>
      <p>Counter - {counter}</p>
    </>
  );
}

export default App;
