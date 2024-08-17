import React, { useRef, useEffect, useState, useId } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";

function InputBox({
  label,
  amount,
  onAmoutChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const input1Ref = useRef();
  const uniqueId = useId(); // To generate unique id

  useEffect(() => {
    if (!amountDisable) input1Ref.current?.focus();
  }, []);

  return (
    <>
      <div className="w-full h-36 bg-white rounded-3xl px-5 py-5 flex gap-5 justify-between">
        <div className="flex flex-col h-full justify-evenly gap-4">
          <label
            htmlFor={uniqueId}
            className="font-semibold text-2xl text-gray-500"
          >
            {label}
          </label>
          <input
            id={uniqueId}
            type="number"
            min={0}
            disabled={amountDisable}
            ref={input1Ref}
            className="outline-none h-12 text-3xl overflow-auto"
            value={amount}
            onChange={(e) =>
              onAmoutChange && onAmoutChange(Number(e.target.value))
            }
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
            className="h-12 outline-none bg-gray-100 shadow-lg rounded-md px-2"
            value={selectCurrency}
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
            disabled={currencyDisable}
          >
            {currencyOptions.map((currency, idx) => (
              <option key={idx} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
