import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";
import Clock from "./Clock";

function App() {
  return (
    <div className="container">
      <TodoList></TodoList>
      <Clock></Clock>
    </div>
  );
}

export default App;
