import React from "react";

import './GiphyGif.css';

const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=&offset=0&q=";

let GIFSearch = () => {
  let [search, setSearch] = React.useState("");
  let [gifs, setGifs] = React.useState([]);
  let [loadingState, setLoadingState] = React.useState(false);
  
  let searchGif = () => {
    if(search.length > 0){
      setLoadingState(true);
      fetch(GIPHY_API+search)
      .then((res)=>{
        setLoadingState(false);
        return res.json();
      })
      .then((result)=>{
        console.log(result);
        setGifs(result.data.map((gif)=>{
          return gif.images.fixed_height.url;
        }))
      })
      .catch(()=>{
        alert("Erreur");
        setLoadingState(false);
      })
    }
  }
  return (
    <div>
      <div className="header">
        <div>
          <input 
            type="text" 
            placeholder="Rechercher un GIF"
            value={search}
            onChange={(e)=>setSearch(e.target.value)} 
          />
          <button onClick={searchGif}>
            Rechercher
          </button>
        </div>
      </div>
      <div className="result">
        {
          (loadingState) ? (
            <div className="loading">
              <div className="loader">
              </div>
            </div>
          ) : (
            <div className="list">
              {
                gifs.map((gif)=>{
                  return (
                    <div className="item">
                      <img src={gif} alt="Gif de l'application GIPHY"/>  
                    </div>
                  )
                })
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

export default GIFSearch;