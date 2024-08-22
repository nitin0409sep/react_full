import React, { useState, useDeferredValue, lazy, Suspense } from "react";

const User = lazy(() => import("./User"));

const Contact = () => {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  return (
    <>
      <label>
        Search User:
        <br />
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>

      <Suspense fallback={<div>Loading...</div>}>
        <User query={deferredQuery} />
      </Suspense>
    </>
  );
};

export default Contact;
