import React, {Component} from 'react';
import FeedbackOverlay from "./FeedbackOverlay";

class AnimalItem extends Component {
  constructor() {
    super();
    console.log("AnimalItem constructor");
    this.state = {
      startDate: "",
      endDate: "",
      zugverhalten: "zugvogel",
      nester: "bodenbrueter",
      kulturtyp: "kulturfluechter",
      paarbildung: "monogam"
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSolution = this.handleSolution.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
  }

  handleContinue() {
    this.props.handler();
  }

  handleSolution() {
    let userSolution = {
      "zugverhalten": this.state.zugverhalten,
      "nester": this.state.nester,
      "kulturtyp": this.state.kulturtyp,
      "paarbildung": this.state.paarbildung
    };
    this.props.handler(this.props.item.key, userSolution);

    this.setState({
      startDate: "",
      endDate: "",
    });

  }

  // An event handler has an event parameter
  handleOnChange(event) {
    // object destructuring
    const {name, value, type, checked} = event.target;
    console.log("Setting: " + value);
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
            <input type="text" value={this.state.startDate} name="startDate" placeholder="Balzzeit" onChange={this.handleOnChange}/>
            <input type="text" value={this.state.endDate} name="endDate" placeholder="Gelege" onChange={this.handleOnChange}/>
            <input type="text" value={this.state.endDate} name="endDate" placeholder="Brutdauer" onChange={this.handleOnChange}/>
            <select 
              value={this.state.zugverhalten}
              name="zugverhalten"
              onChange={this.handleOnChange}
            >
              <option value="zugvogel">Zugvogel</option>
              <option value="standvogel">Standvogel</option>
              <option value="strichvogel">Strichvogel</option>
            </select>
            <select
              value={this.state.nester}
              name="nester"
              onChange={this.handleOnChange}
            >
              <option value="bodenbrueter">Bodenbrüter</option>
              <option value="baumbrueter">Baumbrüter</option>
              <option value="gebueschbrueter">Gebüschbrüter</option>
              <option value="hoehlenbrueter">Höhlenbrüter</option>
              <option value="schilfbrueter">Schilfbrüter</option>
            </select>
            <select
              value={this.state.kulturtyp}
              name="kulturtyp"
              onChange={this.handleOnChange}
            >
              <option value="kulturfluechter">Kulturflüchter</option>
              <option value="kulturfolger">Kulturfolger</option>
            </select>
            <select
              value={this.state.paarbildung}
              name="paarbildung"
              onChange={this.handleOnChange}
            >
              <option value="monogam">monogam</option>
              <option value="polygam">polygam</option>
              <option value="monogam/polygam">monogam/polygam</option>
            </select>
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