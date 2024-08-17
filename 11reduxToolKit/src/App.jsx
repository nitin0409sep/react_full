import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="flex justify-start items-center flex-col w-full bg-gray-400 h-screen px-20 gap-10">
        <h1 className="text-white text-2xl pt-10 font-bold">
          Todo Using Redux Toolkit
        </h1>
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
