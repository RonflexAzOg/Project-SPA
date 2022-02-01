import React from "react";

import TenorLogo from "../../Image/Tenor_logo.svg";
import GiphyLogo from "../../Image/Giphy-logo.svg";

import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {    
        return (
            <div className="search-bar">
                <h1 className="title">Choisissez votre application</h1>
                <div className="div-button">
                    <img className="image image-home" src={TenorLogo} alt="Tenor logo" />
                    <img className="image image-home" src={GiphyLogo} alt="Giphy logo" />
                </div>
                <div className="div-button">
                    <a href="/tenor"><button className="button-link">Tenor</button></a>
                    <a href="/giphy"><button className="button-link">Giphy</button></a>
                </div>
            </div>
        );
    }

}

export default Home;