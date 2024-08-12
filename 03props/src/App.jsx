import Username from "./components/Username";

const arr = [1, 2, 3, 4];
const obj = {
  username: "Username",
  age: 25,
};

function App() {
  return (
    <>
      <Username username1="Nitin" arr={arr} obj={obj} />
    </>
  );
}

export default App;
