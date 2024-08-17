import { useState, useEffect } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./index";
import currencyConverterImage from "./assets/currencyConverter.jpg";

function App() {
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("usd");
  const [from, setFrom] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyList = useCurrencyInfo(to);

  const options = Object.keys(currencyList);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyList[from]);
  };

  useEffect(() => {}, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
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
            <InputBox
              label={from}
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => {
                return setAmount(amount);
              }}
              selectCurrency={from}
              onAmoutChange={(amount) => {
                console.log("Parent", amount);
                return setAmount(amount);
              }}
            />
            <button
              className="bg-blue-600 py-3 px-6 text-white text-2xl rounded-xl absolute -translate-y-11 
          border-2 border-white"
              onClick={swap}
            >
              swap
            </button>
            <InputBox
              label={to}
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => {
                return setTo(currency);
              }}
              selectCurrency={to}
              amountDisable
            />

            <button
              className="w-full bg-blue-600 rounded-lg p-4 text-white text-2xl hover:bg-blue-400 transition-all
          ease-in duration-75"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
