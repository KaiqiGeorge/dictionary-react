import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const[definition, setDefinition]= useState("");

  function handleResponse(response){
    console.log(response.data);
    setDefinition(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleUpdate(event) {
    event.preventDefault();
    search();
  }

  function update(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="dictionary">
      <section className="search">
        <label>What word do you want to look up? </label>
      <form className="row" onSubmit={handleUpdate}>
          <input
            type="search"
            className="form-control"
            defaultValue={props.defaultWord}
            placeholder="Search for a word..."
            onChange={update}
          />
       
       
      </form>
    <span className="hint">i.e. wine, sunrise, flower, yoga, food...</span>
      </section>
      <Result definition={definition}/>

    </div>
  );
}
