import React, { useEffect, useState } from "react";
import { useTodoContext } from "../context";

const ListTodo = () => {
  const { todos, editTodo, deleteTodo } = useTodoContext();

  const [todo, setTodos] = useState([]);
  const [edittable, setEditable] = useState(false);
  const [updatedValue, setUpdatedValue] = useState("");
  const [editTodoIdx, setEditTodoIdx] = useState(-1);

  //? Make Editable & Update Value
  const editTodoItem = (todo) => {
    setEditable(!edittable);

    if (!edittable) {
      setEditTodoIdx(todo.id);
      setUpdatedValue(todo.todo);
    } else {
      editTodo(todo.id, {
        ...todo,
        todo: updatedValue ? updatedValue : todo.todo,
      });
      setEditTodoIdx(-1);
    }
  };

  //? Delete Todo Item
  const deleteTodoItem = (id) => {
    deleteTodo(id);
  };

  useEffect(() => {
    if (!todos && !todos.length > 0) return setTodos([]);
    setTodos(todos.map((todo) => todo));
  }, [todos]);

  return (
    <>
      <div className="h-full overflow-auto">
        {todo.map((val) => (
          <div
            key={val.id}
            className="w-full border-2 border-black rounded-md flex justify-between mb-5"
          >
            {edittable && editTodoIdx === val.id ? (
              <input
                type="text"
                className="flex-1 outline-none px-3 py-2 rounded-md"
                autoFocus={true}
                value={updatedValue}
                onChange={(e) => setUpdatedValue(e.target.value)}
              />
            ) : (
              <input
                type="text"
                className="flex-1 outline-none px-3 py-2 rounded-md"
                value={val.todo}
                readOnly={editTodoIdx !== val.id}
              />
            )}

            <div className="flex px-2 gap-5">
              <button
                onClick={() => editTodoItem(val)}
                className="bg-green-400 pl-4 pr-4 mt-2 mb-2 rounded-md text-white"
              >
                {edittable & (editTodoIdx === val.id) ? "Save" : "Edit"}
              </button>
              <button
                onClick={() => deleteTodoItem(val.id)}
                className="bg-red-500 p-2 mt-2 mb-2 rounded-md text-white"
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

export default ListTodo;
