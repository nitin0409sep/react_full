import React, { useContext } from "react";
import ToggleContext from "../context/ToggleContext";

const Card = () => {
  const { check } = useContext(ToggleContext);

  const theme = check
    ? "bg-black text-white border-2 border-white"
    : "bg-white text-black border-2 border-black";

  const themeBtn = check ? "bg-white text-black" : "bg-black text-white";

  return (
    <>
      <div
        className={`m-20 mt-6 h-72 w-72 flex flex-col justify-between p-5 
        text-justify rounded-xl ${theme}`}
      >
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            adipisci obcaecati sed explicabo repellat beatae illo ab veritatis
            et dolor!
          </p>
        </div>

        <div className="flex justify-between gap-10rounded-3xl">
          <button className={`p-5  font-bold rounded-3xl ${themeBtn}`}>
            Login
          </button>
          <button className={`p-5 font-bold rounded-3xl ${themeBtn}`}>
            Signup
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
