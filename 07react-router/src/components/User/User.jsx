import React from "react";
import { useParams, Outlet } from "react-router-dom";

const User = () => {
  const { id } = useParams();

  return (
    <div>
      User-:
      {id}
      <Outlet />
    </div>
  );
};

export default User;
