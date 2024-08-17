import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandeler = (e) => {
    e.preventDefault();

    //! Add Value to State
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form
        onSubmit={addTodoHandeler}
        className="w-full flex justify-center flex-col items-center gap-4 px-2"
      >
        <input
          type="text"
          placeholder="Enter a todo..."
          className="rounded-md p-3 outline-none w-full"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button
          type="submit"
          className={`${
            input.length === 0 ? "bg-gray-300" : "bg-blue-400"
          } p-3 text-white w-24 rounded-lg text-xl font-semibold`}
          disabled={input.length === 0}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default AddTodo;
