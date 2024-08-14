import { useState } from "react";
import TogglerButton from "./compomnents/TogglerButton";
import Card from "./compomnents/Card";
import ToggleContextProvider from "./context/ToggleContextProvider";

function App() {
  return (
    <>
      <ToggleContextProvider>
        <div className="flex w-full h-screen justify-center items-center flex-col">
          <span className="font-bold font-serif">Dark Mode Or Light Mode</span>
          <TogglerButton />
          <Card />
        </div>
      </ToggleContextProvider>
    </>
  );
}

export default App;
