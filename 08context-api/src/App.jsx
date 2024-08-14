import { Outlet } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

import { NavLink } from "react-router-dom";

function App() {
  return (
    <UserContextProvider>
      <div style={{ display: "flex", gap: "10px" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/contact/user">User</NavLink>
        <NavLink to="/contact/user/mobile">Mobile</NavLink>
      </div>
      <Outlet />
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
