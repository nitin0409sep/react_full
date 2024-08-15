import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Item 1",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  editTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggeleComplete: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = () => {
  return useContext(TodoContext);
};
