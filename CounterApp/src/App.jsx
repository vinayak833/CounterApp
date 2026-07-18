import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const decrease = () => {
  if (count > 0) {
    setCount(count - 1);
  }
};

  return (
    <div>
      <h1>Counter App</h1>

      <h2>{count}</h2>

     <button onClick={decrease}>
        -
      </button>

      <button onClick={() => setCount(0)}>
         Reset
      </button>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>
      
    </div>
  );
}

export default App;