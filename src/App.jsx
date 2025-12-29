import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState(0);

  const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return b;
  };

  // 🔥 Recalculate whenever index changes
  useEffect(() => {
    setValue(fibonacci(index));
  }, [index]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🧮 Fibonacci Calculator</h1>
        <p>Correct Logic • React Hooks • Clean UI</p>
      </header>

      <main className="card">
        <h2>Fibonacci Number</h2>

        <p>
          <strong>Index (n):</strong> {index}
        </p>

        <p className="count">{value}</p>

        <div className="btn-group">
          <button onClick={() => setIndex((n) => Math.max(0, n - 1))}>-</button>
          <button onClick={() => setIndex(0)}>Reset</button>
          <button onClick={() => setIndex((n) => n + 1)}>+</button>
        </div>
      </main>

      <footer className="app-footer">
        <p>Built with ❤️ using React</p>
      </footer>
    </div>
  );
}

export default App;
