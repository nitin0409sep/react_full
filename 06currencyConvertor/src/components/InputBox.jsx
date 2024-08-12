import React from "react";

function InputBox({
  currentConveryLabel, //? From ? To
  convertCurrencyTypeLabel, //? Currency Type

  convertCurrentCurrency, //? 1
  convertedCurrentCurrency, //? 82

  convertFromCurrency, //? inr
  convertedToCurrency, //? usd

  currencyOptions = [], //? List of Currencies
  isDisabled, //? true/false
}) {
  return (
    <>
      <div className="w-full h-36 bg-white rounded-3xl px-5 py-5 flex gap-5 justify-between">
        <div className="flex flex-col h-full justify-evenly gap-4">
          <label
            htmlFor="labelName"
            className="font-semibold text-2xl text-gray-500"
          >
            {currentConveryLabel}
          </label>
          <input
            type="number"
            min={0}
            disabled={isDisabled}
            className="outline-none h-12 text-3xl overflow-auto"
          />
        </div>

        <div className="flex flex-col h-full justify-evenly gap-4">
          <label
            htmlFor="labelName"
            className="font-semibold text-2xl text-gray-500"
          >
            Currency Type
          </label>
          <select
            name=""
            id=""
            className="h-12 outline-none bg-gray-100 shadow-lg rounded-md px-2"
          >
            <option value="usd">usd</option>
            <option value="usd">usd</option>
            <option value="usd">usd</option>
            <option value="usd">usd</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
