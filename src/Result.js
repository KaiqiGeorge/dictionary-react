import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";
import "./Result.css"

export default function Result(props){
    if(props.definition){
        return (
        <div className="defintion">
        <section>
         <h1>{props.definition.word}</h1>
         {props.definition.phonetics.map(function(phonetic,index){
            return<Phonetics key={index} phonetic={phonetic} />
         })}
         </section>
            {props.definition.meanings.map(function(meaning,index){
                return<Meaning key={index} meaning={meaning} />
            })}
      
        </div>
    )} else{
        return null;
    }
}