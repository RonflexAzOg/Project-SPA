import React from "react";
import TenorGif from "../../components/TenorGif";

import TenorLogo from "../../Image/Tenor_logo.svg"

import '../Giphy/Giphy.css'

function Tenor(props) {
    return (
        <div className="search-bar">
        <img className="image" src={TenorLogo} alt="Giphy logo" />
        <h1 className="title">Faites votre recherche de gif dans l'application GIPHY</h1>
        <a className="link" href="/"><p>Revenez à l'acceuil en cliquant ici</p></a>
        <TenorGif />    
    </div>
    )
}

export default Tenor;