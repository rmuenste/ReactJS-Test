import React, { Component } from "react";

class GameSelectElement extends Component {

    constructor(props) {
        super();
    }

    handleChange = (event) => {
        this.props.changeHandler(event);
    }


    render() {

        let styleClass = "custom-select";

        const myOptions = this.props.selectOptions; 

        if(this.props.showResult) {
            if(this.props.userSolution) {
                styleClass += " " + "my-select-success"
            } else {
                styleClass += " " + "my-select"
            }
        }

        return (
            <fieldset>
              <select className={styleClass} 
                    name={this.props.name}
                    value={this.props.value}
                    disabled={this.props.isDisabled}
                    onChange={this.handleChange}
                    >
                    <option>{this.props.selectHeader}</option>
                    {myOptions}
              </select>
            </fieldset>
        )

    }
}

export default GameSelectElement;