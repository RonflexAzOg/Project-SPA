import React from "react";
import './ButtonTenor.css';

class ButtonTenor extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            switch: false
        }
    }

    handleClic = () => {
        this.setState({
            switch: !this.state.switch
        })
    }

    render() {
        return (
            <div className="content">
                <button onClick={this.handleClic}>Rechercher avec {this.props.name}</button>
            </div>
        );
    }
}

export default ButtonTenor;