import React, { useEffect } from "react";

const Children = React.memo(({ fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      Children <br />
    </div>
  );
});

export default Children;
