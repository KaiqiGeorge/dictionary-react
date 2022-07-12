import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [dictionary, setDictionary] = useState("");

  function handleResponse(response){
    console.log(response.data);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
    search();
  }

  function handleKeyword(event) {
    event.preventDefault();
  }
  return (
    <div className="dictionary">
      <h1>Dictionary</h1>
      <form className="row" onSubmit={handleKeyword}>
        <div className="col-8">
          <input
            type="search"
            className="form-control"
            onChange={updateKeyword}
          />
        </div>
        <div className="col-4">
          <input type="submit" value="search" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
