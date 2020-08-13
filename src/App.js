import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useColorSwitch from "./useColorSwitch";

function App() {
  const [color, handleButton1Click] = useColorSwitch();
  const [color2, handleButton2Click] = useColorSwitch("#0000ff", "#ff00ff");
  return (
    <div>
      <p style={{ color }}>这是一段文本</p>
      <p style={{ color: color2 }}>这是第二段文本</p>
    </div>
  );
}

export default App;
