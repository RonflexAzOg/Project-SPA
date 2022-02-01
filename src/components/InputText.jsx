import React from "react";
import './InputText.css'

class InputText extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleChange = (event) => {
        console.log(event.target.value);
        const value = event.target.value
        this.setState({
            text: value
        })
    }
    
    render() {
        return (
            <div className='content'>
                <label>{this.props.name}</label>
                <input type="text" placeholder={this.props.placeholder} onChange={this.handleChange} />
                <span>{this.state.text}</span>
            </div>
        )
    }
}

export default InputText;