import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (count === 5) {
      setShowMessage(true);
    }
  }, [count]);

  return (
    <div className="app">
      <h1>Števec: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      {showMessage && <div className="modal">Dosegel si 5</div>}
    </div>
  );
}
