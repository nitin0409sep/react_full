import { useState, useEffect } from "react";
import { InputBox } from "./index";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import currencyConverterImage from "./assets/currencyConverter.jpg";

function App() {
  // const [from, setFrom] = useState("");
  // const [to, setTo] = useState("");

  useEffect(() => {}, []);

  return (
    <>
      <div
        className="h-screen w-full flex justify-center items-center"
        style={{
          background: `url(${currencyConverterImage}) no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="flex flex-col w-2/3 px-10 justify-center items-center gap-6 h-3/4 
        rounded-xl bg-gray-800 bg-opacity-55 relative"
        >
          <InputBox currentConveryLabel="From" isDisabled={false} />
          <button
            className="bg-blue-600 py-3 px-6 text-white text-2xl rounded-xl absolute -translate-y-11 
          border-2 border-white"
          >
            swap
          </button>
          <InputBox currentConveryLabel="To" isDisabled={true} />

          <button
            className="w-full bg-blue-600 rounded-lg p-4 text-white text-2xl hover:bg-blue-400 transition-all
          ease-in duration-75"
          >
            Convert INR to USD
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
