import React, {Component} from 'react';
import FeedbackOverlay from "./FeedbackOverlay";

class AnimalItem extends Component {
  constructor() {
    super();
    console.log("AnimalItem constructor");
    this.state = {
      startDate: "",
      endDate: "",
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSolution = this.handleSolution.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
  }

  handleContinue() {
    this.props.handler();
  }

  handleSolution() {

    this.props.handler(this.props.item.key, this.state.startDate, this.state.endDate),
    this.setState({
      startDate: "",
      endDate: "",
    });

  }

  // An event handler has an event parameter
  handleOnChange(event) {
    // object destructuring
    const {name, value, type, checked} = event.target;
    type === "checkbox" ? this.setState({[name]: checked}) :
      // the [] brackets will turn the variable into the string
      this.setState({
        [name]: event.target.value
      });
  }

  // render
  render() {
    return (
        <div className={"card"}>
        <h2>{this.props.item.name}</h2> 
        <div className={"card-image"}>
          <img src={this.props.item.imgPath}/>
          {(this.props.feedbackState) ? <FeedbackOverlay result={this.props.result}/> : null}
        </div>
          <div className={"input-container"}>
          <form autoComplete={"off"}>
            <input type="text" value={this.state.startDate} name="startDate" placeholder="Beginn der Jagdzeit" onChange={this.handleOnChange}/>
            <input type="text" value={this.state.endDate} name="endDate" placeholder="Ende der Jagdzeit" onChange={this.handleOnChange}/>
          </form>
            <br/>
          {(!this.props.feedbackState) ? <button onClick={this.handleSolution}>Fertig!</button> :
           <button onClick={this.handleContinue}>Weiter!</button>
          }
          </div>
        </div>
      );
  }
}

export default AnimalItem;