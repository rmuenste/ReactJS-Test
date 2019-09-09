import React, {Component} from 'react';
import {connect} from 'react-redux';
import FeedbackOverlay from "./FeedbackOverlay";
import GameSelectElement from "./GameSelectElement/GameSelectElement";

class AnimalCard extends Component {
  constructor(props) {
    super();
    console.log("AnimalCard constructor");
    console.log(props);
    this.state = {
      startDate: "",
      endDate: "",
      fieldNames: ["startDate", "endDate"]
    };

  }

  handleContinue = () => {
    this.props.handler();
  }

  handleSolution = () => {
    this.props.handler(this.props.item.key, this.state.startDate, this.state.endDate),
    this.setState({
      startDate: "",
      endDate: "",
    });
  }

  // An event handler has an event parameter
  handleOnChange = (event) => {
    // object destructuring
    const {name, value, type, checked} = event.target;
    console.log("Select triggered: " + name);
    type === "checkbox" ? this.setState({[name]: checked}) :
      // the [] brackets will turn the variable into the string
      this.setState({
        [name]: event.target.value
      }, () => {
         console.log("Start date:" + this.state.startDate); 
         console.log("End date:" + this.state.endDate); 
      });
  }

  generateQuestionsForm = () => {

    let headerArray = ["Beginn der Jagdzeit", "Ende der Jagdzeit"];

    let beginArray = this.props.gameData.map( (item, index) => (
      <option key={index}>{item.begin}</option>
      )
    );

    let endArray = this.props.gameData.map( (item, index) => (
      <option key={index}>{item.end}</option>
      )
    );

    let allDataArray = [beginArray, endArray];

    let solutionArray = [this.props.item.begin, this.props.item.end];

    let selectElementArray2 = this.state.fieldNames.map( (itemName, index) => {
      return (
      <GameSelectElement isDisabled={this.props.showTheOverlay || !this.props.gameRunning} 
                          name={itemName}
                          value={(this.props.showTheOverlay) ? solutionArray[index] : this.state[itemName]}
                          changeHandler={this.handleOnChange}
                          selectOptions={allDataArray[index]}
                          selectHeader={headerArray[index]}
                          showResult={this.props.showTheOverlay}
                          userSolution={this.props.userSolution[index]}
                          />
      );
    });

    let selectElementArray = (
      <form>
        <div className="form-group">
          {selectElementArray2[0]}
        </div>
        <div className="form-group">
          {selectElementArray2[1]}
        </div>
      </form>
    );

    return selectElementArray;
  }

  // render
  render() {

    let questionsForm = this.generateQuestionsForm();

    return (
			<div className="card">
        {(this.props.showTheOverlay) ? <div className="card-img-overlay"> <FeedbackOverlay result={this.props.reduxResult}/> </div> : null}
				<img src={this.props.item.imgPath} className="card-img-top"/>
				<div className="card-body">
					<h4 className="card-title">{this.props.item.name}</h4>
          {questionsForm}
          {(!this.props.showTheOverlay) ? <button className="btn btn-primary btn-block" onClick={this.handleSolution} disabled={!this.props.gameRunning}>Fertig!</button> :
           <button className="btn btn-primary btn-block" onClick={this.handleContinue} disabled={!this.props.gameRunning}>Weiter!</button>
          }
				</div>
			</div>      
      );
  }
}

const mapStateToProps = (state) => {
  return {
    reduxResult: state.currentResult,
    showTheOverlay: state.showTheOverlay,
    gameRunning: state.gameRunning,
    gameData: state.levelOneData
  }
}

export default connect(mapStateToProps)(AnimalCard);