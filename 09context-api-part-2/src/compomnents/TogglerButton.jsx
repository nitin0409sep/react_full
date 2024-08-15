import { useContext } from "react";
import ToggleContext from "../context/ToggleContext";

const TogglerButton = () => {
  const { check, setCheck } = useContext(ToggleContext);

  return (
    <>
      <div>
        <span className="font-bold text-2xl mr-2">Toggler</span>
        <input
          type="checkbox"
          checked={check}
          onChange={() => setCheck((prev) => !prev)}
        />
      </div>
    </>
  );
};

export default TogglerButton;
