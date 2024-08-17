import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodoList, removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editable, setEditable] = useState(false);
  const [updateTodo, setUpdateTodo] = useState("");
  const [editTodoIdx, setEditTodoIdx] = useState(-1);

  const editInput = useRef();

  //? Update Todo
  const updateTodoItem = (todo) => {
    setEditable((prev) => !prev);

    if (!editable) {
      setUpdateTodo(todo.text);
      setEditTodoIdx(todo?.id);
    } else {
      if (updateTodo.length)
        dispatch(updateTodoList({ id: todo.id, text: updateTodo }));
      setEditTodoIdx(-1);
    }
  };

  //? Delete Todo
  const deleteTodo = (id) => {
    //! Delete from state
    dispatch(removeTodo(id));
  };

  useEffect(() => {
    if (editable) {
      editInput.current?.focus();
    }
  }, [editable]);

  return (
    <>
      <div className="w-full rounded-md max-h-screen overflow-auto mb-5 flex gap-3 flex-col px-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="w-full bg-white rounded-md flex justify-between gap-4"
          >
            {editable && editTodoIdx === todo.id ? (
              <input
                className="flex-1 p-3 text-xl pr-1 outline-none rounded-s-md"
                value={updateTodo}
                ref={editInput}
                onChange={(e) => setUpdateTodo(e.target.value)}
              />
            ) : (
              <input
                className="flex-1 p-3 text-xl pr-1 outline-none rounded-s-md"
                value={todo.text}
                readOnly
              />
            )}

            <div className="flex h-fit rounded-e-md">
              <button
                className={`${
                  editable & (editTodoIdx === todo.id)
                    ? "bg-blue-400"
                    : "bg-green-500"
                } w-24 p-3 text-white text-xl`}
                onClick={() => updateTodoItem(todo)}
              >
                {editable & (editTodoIdx === todo.id) ? "Save" : "Edit"}
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
      </div>
    </>
  );
};

export default Todos;
