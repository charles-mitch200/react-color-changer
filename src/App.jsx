import React from "react";
import Square from "./components/Square";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarktext, setIsDarktext] = useState(true);

  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarktext={isDarktext}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarktext={isDarktext}
        setIsDarktext={setIsDarktext}
      />
    </div>
  );
}

export default App;
