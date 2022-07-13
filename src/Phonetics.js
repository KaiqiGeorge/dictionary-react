import React from "react";
import "./Phonetic.css"

export default function  Phonetics(props){
    if(props.phonetic){ 
        return(
        <div className="Phonetics">
            <a href={props.phonetic.audio}  target="_blank"
          rel="noopener noreferrer" className="audio">Listen</a>
            <span className="pronounciation">{props.phonetic.text}</span>

        </div>
    )
}else{
    return null;
}}