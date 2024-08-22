import React from "react";

const Children = React.memo(({ fetchUsers }) => {
  console.log("Children");
  return <div>Children</div>;
});

export default Children;
