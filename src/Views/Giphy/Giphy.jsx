import React from "react";
import GiphyGif from '../../components/GiphyGif';

import GiphyLogo from "../../Image/Giphy-logo.svg"

import './Giphy.css';


function Giphy(props) {
    return (
        <div className="search-bar">
            <img className="image" src={GiphyLogo} alt="Giphy logo" />
            <h1 className="title">Faites votre recherche de gif dans l'application GIPHY</h1>
            <a className="link" href="/"><p>Revenez à l'acceuil en cliquant ici</p></a>
            <GiphyGif />    
        </div>
    );
}

export default Giphy;