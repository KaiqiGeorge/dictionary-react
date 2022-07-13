import React from "react";
import ReactDOM from "react-dom";
import Dictionary from "./Dictionary";
import "./index.css"


function App() {
  return (
    <div className="dictionary-app">
      <Dictionary defaultWord="sunset"/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

