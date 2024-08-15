import React, { useState } from "react";
import { useTodoContext } from "../context";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodoContext();

  const handelAddTodo = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <>
      <form className="flex">
        <input
          type="text"
          placeholder="Write Text"
          className="w-full border border-black/10 rounded-l-lg px-3
        outline-none duration-150 bg-white/20 py-1.5"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={handelAddTodo}
          className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
