import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="meaning">
        <ol>
          <h3>{props.meaning.partOfSpeech}</h3>
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <li key={index}>
                <span className="definition">{definition.definition}</span>{" "}
                <br />
                <span className="example">{definition.example}</span>
              </li>
            );
          })}
        </ol>
        <span className="Similar">Similar: </span>
       
        {props.meaning.synonyms.map(function (synonym, index) {
          
          if (index < 6) {
            return (
              <span>
                <li className="synonym" key={index}>
                  {synonym}
                </li>
              </span>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
