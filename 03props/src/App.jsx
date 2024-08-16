import Username from "./components/Username";
import { useState } from "react";
import Input from "./components/Input";

const arr = [1, 2, 3, 4];
const obj = {
  username: "Username",
  age: 25,
};

function App() {
  //! Hooks can only be called inside of the body of a function component.
  const [userName, setUserName] = useState("Hello, Tintin!");

  const submittedForm = (e) => {
    e.preventDefault();
    console.log(userName);
  };

  return (
    <>
      <Username username1="Nitin" arr={arr} obj={obj} />

      <form onSubmit={submittedForm}>
        <h2
          style={{
            backgroundColor: "lightblue",
            width: "99%",
            padding: "10px",
          }}
        >
          Send data from child to parent.
          <br />
          <span
            style={{
              color: "red",
              textAlign: "justify",
              width: "100%",
              display: "block",
              padding: "10px 0px",
            }}
          >
            In React, you can send data from a child component to a parent
            component by using callback functions (also known as handler
            functions) passed down from the parent to the child as props. The
            child component can then invoke this function and pass data back to
            the parent component. This effectively allows the child component to
            "send" data to the parent.
          </span>
        </h2>
        <h1>
          <Input
            userName={userName}
            setUserNameValue={(val) => setUserName(val)}
          ></Input>
        </h1>

        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}

export default App;
