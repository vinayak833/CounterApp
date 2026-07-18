import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <div className="buttons">
        <button onClick={decrease}>-</button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>

        <button onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;