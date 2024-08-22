import React, { memo, useEffect, useMemo, useState } from "react";

export const Children = memo(({ val }) => {
  const [firstNo, setFirstNo] = useState(0);

  console.log("Render Children");

  //! useMemo hook is designed to return a memoized value.
  const value = useMemo(() => {
    return val + 1;
  }, [val]);

  const firstNoFunc = () => {
    console.log("First Num Value");
    setFirstNo((prev) => prev + 1);
  };

  return (
    <div>
      Children - {value}
      <br />
      First Num - {firstNo}
      <br />
      <br />
      <button onClick={firstNoFunc}>FirstNo</button>
    </div>
  );
});
