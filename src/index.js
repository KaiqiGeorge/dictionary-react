import React from "react";
import ReactDOM from "react-dom";
import Dictionary from "./Dictionary";
import "./index.css"


function App() {
  return (
    <div className="dictionary-app">
      <Dictionary defaultWord="sunset"/>
      <footer> This <a href="https://github.com/KaiqiGeorge/dictionary-react" target="_blank"  rel="noreferrer">open-sourced</a> project was coded by Kaiqi George and hosted on<a href="https://kaiqi-dictionary-app.netlify.app/" target="_blank"  rel="noreferrer"> netlify</a> </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

