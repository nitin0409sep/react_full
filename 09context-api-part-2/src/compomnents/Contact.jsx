import { userContact } from "../context/UserContactContext";
import { useContext } from "react";
import ToggleContext from "../context/ToggleContext";

const Contact = () => {
  const { mob } = userContact();
  const { check } = useContext(ToggleContext);

  const theme = check
    ? "bg-black text-white border-2 border-white"
    : "bg-white text-black border-2 border-black";

  function updateName() {
    mob("Nitin", "Verma");
  }

  return (
    <div>
      <button className={`${theme} p-5 rounded-3xl`} onClick={updateName}>
        <span className="text-2xl">Update Name</span>
      </button>
      <br />
      <br />
    </div>
  );
};

export default Contact;
