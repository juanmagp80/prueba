import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="title">Welcome to Vite + React!</h1>
    </div>
  );
}

export default App;
