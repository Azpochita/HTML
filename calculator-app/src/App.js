import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const performOperation = (operation) => (e) => {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);

    switch (operation) {
      case "add":
        setResult((prevResult) => prevResult + inputValue);
        break;
      case "subtract":
        setResult((prevResult) => prevResult - inputValue);
        break;
      case "multiply":
        setResult((prevResult) => prevResult * inputValue);
        break;
      case "divide":
        setResult((prevResult) => prevResult / inputValue);
        break;
      default:
        break;
    }

    resetInput();
  };

  const resetInput = () => {
    inputRef.current.value = "";
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult(0);
    resetInput();
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input ref={inputRef} type="number" placeholder="Type a number" />
        <button onClick={performOperation("add")}>add</button>
        <button onClick={performOperation("subtract")}>subtract</button>
        <button onClick={performOperation("multiply")}>multiply</button>
        <button onClick={performOperation("divide")}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>
      </form>
    </div>
  );
}

export default App;
