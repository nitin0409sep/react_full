import { useState, useEffect } from "react";
import "./App.css";
import { TodoForm, ListTodo } from "./index";
import { TodoContextProvider } from "./context/index";

function App() {
  const [todos, setTodos] = useState([]);

  //? Get Todo's Item from Local Storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) setTodos(todos);
  }, []);

  //? Add Todo Item's in Local Storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //? Add Todo
  const addTodo = (value) => {
    //? This will add item in localstorage but todo will not be  updated
    //! setTodo([{ id: Date.now(), ...value }, ...todo]);

    //? Correct Way
    setTodos((prev) => [{ id: Date.now(), ...value }, ...prev]);
  };

  //? Update Todo
  const editTodo = (id, value) => {
    setTodos((prev) => prev.map((val) => (val.id === id ? value : val)));
  };

  //? Delete Todo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  //? Toggle Complete
  const toggeleComplete = (id) => {
    setTodos((prev) => {
      prev.map((val) =>
        val.id === id ? { ...val, completed: !val.toggeleComplete } : val
      );
    });
  };

  return (
    <TodoContextProvider
      value={{ todos, addTodo, editTodo, deleteTodo, toggeleComplete }}
    >
      <div className="h-screen w-full flex flex-col gap-5 px-20 py-10 text-center">
        <span className="text-2xl font-serif">Todo</span>
        <TodoForm />
        <ListTodo />
      </div>
    </TodoContextProvider>
  );
}

export default App;
