import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    const[keyword,setKeyword]=useState("");
    const[dictionary, setDictionary]=useState("");

    function handleKeyword(event){
        event.preventDefault();

    }
    function search(){
        
    }

    function updateKeyword(event){
        setKeyword(event.target.value);
        search();
    }
  return (
    <div className="dictionary">
      <h1>Dictionary</h1>
      <form className="row" onSubmit={handleKeyword}>
        <div className="col-8">
          <input type="search" className="form-control" onChange={updateKeyword}/>
        </div>
        <div className="col-4">
          <input type="submit" value="search" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
