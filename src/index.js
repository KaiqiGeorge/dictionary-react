import React from "react";
import ReactDOM from "react-dom";
import Dictionary from "./Dictionary";


function App() {
  return (
    <div className="dictionary-app">
      <Dictionary />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

