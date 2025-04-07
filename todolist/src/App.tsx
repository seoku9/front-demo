import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let name: string = "";
  return (
    <div className="App">
      <h1>Hello, 리액트!!</h1>
      {name === "리액트" ? <h1>ss</h1> : <h1>hh</h1>}
      <p>반갑습니다.</p>
    </div>
  );
}

export default App;
