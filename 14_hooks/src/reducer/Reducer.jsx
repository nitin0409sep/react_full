import React, { useReducer } from "react";

const Reducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return {
          ...state,
          age: state.age + 1,
        };
      case "Decrement":
        return {
          ...state,
          age: state.age - 1,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { age: 40 });

  return (
    <div>
      Age Reducer - {state.age}
      <br />
      <br />
      <button
        onClick={() => dispatch({ type: "Increment" })}
        disabled={state.age > 99}
      >
        Age Increment
      </button>
      <br />
      <br />
      <button
        onClick={() => dispatch({ type: "Decrement" })}
        disabled={state.age < 1}
      >
        Age Decrement
      </button>
    </div>
  );
};

export default Reducer;
