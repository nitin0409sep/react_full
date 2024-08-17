import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="flex justify-start items-center flex-col gap-10 w-full bg-gray-400 h-screen px-20">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
