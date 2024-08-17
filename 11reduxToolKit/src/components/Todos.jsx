import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodoList, removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editable, setEditable] = useState(false);
  const [updateTodo, setUpdateTodo] = useState("");

  const editInput = useRef();

  //? Update Todo
  const updateTodoItem = (todo) => {
    setEditable((prev) => !prev);

    if (!editable) {
      setUpdateTodo(todo.text);
      editInput.current?.focus();
    } else {
      if (updateTodo.length)
        dispatch(updateTodoList({ id: todo.id, text: updateTodo }));
    }
  };

  //? Delete Todo
  const deleteTodo = (id) => {
    //! Delete from state
    dispatch(removeTodo(id));
  };

  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="w-full bg-white rounded-md flex justify-between gap-4"
        >
          {!editable ? (
            <input
              className="flex-1 p-3 text-xl pr-1 outline-none rounded-s-md"
              value={todo.text}
              readOnly
            />
          ) : (
            <input
              className="flex-1 p-3 text-xl pr-1 outline-none rounded-s-md"
              value={updateTodo}
              ref={editInput}
              onChange={(e) => setUpdateTodo(e.target.value)}
            />
          )}

          <div className="flex h-fit bg-red-400 rounded-e-md">
            <button
              className="bg-green-400 w-24 p-3 text-white text-xl"
              onClick={() => updateTodoItem(todo)}
            >
              {editable ? "Save" : "Edit"}
            </button>
            <button
              className="bg-red-400 w-24 p-3 text-white text-xl rounded-e-md"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Todos;
