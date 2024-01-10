import { TicTacToe } from "./components/TicTacToe";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TicTacToe />
    </>
  );
}

export default App;
