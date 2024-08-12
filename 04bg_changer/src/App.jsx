import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <>
      <div
        className="w-screen h-screen flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <div className="w-full flex gap-3 justify-center">
          <button
            className="outline-none"
            onClick={() => setcolor("red")}
            style={{ backgroundColor: "red", color: "white" }}
          >
            Red
          </button>
          <button
            className="outline-none"
            onClick={() => setcolor("blue")}
            style={{ backgroundColor: "blue", color: "white" }}
          >
            Blue
          </button>
          <button
            className="outline-none "
            onClick={() => setcolor("green")}
            style={{ backgroundColor: "green", color: "white" }}
          >
            Green
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
