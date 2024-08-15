import TogglerButton from "./compomnents/TogglerButton";
import Card from "./compomnents/Card";
import ToggleContextProvider from "./context/ToggleContextProvider";
import Contact from "./compomnents/Contact";
import { UserContactContextProvider } from "./context/UserContactContext";
import { useEffect, useState } from "react";
import User from "./compomnents/User";

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const mob = (val1 = "A", val2 = "B") => {
    setFirstname(val1);
    setLastname(val2);
  };

  useEffect(() => {
    mob();
  }, []);

  return (
    <>
      <ToggleContextProvider>
        <div className="flex w-full h-screen justify-center items-center flex-col">
          <span className="font-bold font-serif">Dark Mode Or Light Mode</span>
          <TogglerButton />
          <Card />

          <UserContactContextProvider value={{ firstname, lastname, mob }}>
            <Contact />
            <User />
          </UserContactContextProvider>
        </div>
      </ToggleContextProvider>
    </>
  );
}

export default App;
