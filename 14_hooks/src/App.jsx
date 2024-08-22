import { useState } from "react";
import "./App.css";
import { Outlet, NavLink } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="forwardRef">ForwardRef</NavLink>
        <NavLink to="layoutEffect">LayoutEffect</NavLink>
        <NavLink to="memo">Memo</NavLink>
        <NavLink to="reducer">Reducer</NavLink>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
