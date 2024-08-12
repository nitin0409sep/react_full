//! React (and JSX in general) cannot directly render objects as they are. JSX can only render primitive types like strings, numbers, or elements.

function Username({ username1, username2 = "defaultUser", arr, obj }) {
  return (
    <>
      <h1>{username1}</h1>
      <h2>{username2}</h2>
      <h3>{arr}</h3>
      <h4>{obj.username}</h4>
      <h4>{obj.age}</h4>
      {/* <h4>{obj}</h4>  */}
    </>
  );
}

export default Username;
