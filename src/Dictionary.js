import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";
import Images from "./Images"

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const[definition, setDefinition]= useState("");
  const[images,setImages] = useState([]);
  const[loaded, setLoaded]= useState(false);

 

function handleImages(response){
  setImages(response.data.photos);
}

 function load(){
  setLoaded(true);
  search();
 }

  function handleResponse(response){
    setDefinition(response.data[0]);
    let apiUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=9`;
    let apiKey="563492ad6f917000010000011af6a812338a420cb7866dd633263b9e";
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
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
      <Images images={images} />

    </div>
  );
}
