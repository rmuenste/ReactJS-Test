import React, {Component} from 'react';
import {connect} from 'react-redux';
import FeedbackOverlay from "../FeedbackOverlay";
import { shuffleNames } from "../../modules/Shuffle";
import GameSelectElement from "../GameSelectElement/GameSelectElement";

class NabuAnimalCard extends Component {
  constructor(props) {
    super();

    let namesArray = this.generateRandomAnswers(props);
    namesArray = shuffleNames(namesArray);
    let namesElementArray = namesArray.map(
      (value, index) => (<option key={index}>{value}</option>)
    );

    this.state = {
      animalName: "",
      endDate: "",
      choices: namesElementArray,
      fieldNames: ["animalName"]
    };

  }

  handleContinue = () => {
    console.log("continueHandler!");
    console.log(this.props);
    this.props.continueHandler();
  }

  componentDidUpdate(prevProps) {
    if (this.props.item.name !== prevProps.item.name) {
      let namesArray = this.generateRandomAnswers(this.props);
      namesArray = shuffleNames(namesArray);
      let namesElementArray = namesArray.map(
        (value, index) => (<option key={index}>{value}</option>)
      );

      this.setState({
        animalName: "",
        endDate: "",
        choices: namesElementArray,
        fieldNames: ["animalName"]
      });
    }
  }

  handleSolution = () => {
    this.props.solutionHandler(this.props.item, this.state.animalName);
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  generateRandomAnswers = (theProps) => {

    let answerSet = new Set();

    answerSet.add(theProps.item.name);

    while( answerSet.size < 8) {
      let idx = this.getRandomInt(theProps.inputData.length);
      answerSet.add(theProps.inputData[idx].name);
    }

    return [...answerSet];
  }

  // An event handler has an event parameter
  handleOnChange = (event) => {
    // destructure the object
    const {name, value, type, checked} = event.target;
    //console.log("NabuAnimalCardHandleChange!" + " " + name);
    type === "checkBox" ? this.setState({[name]: checked}) :
    this.setState({
      [name]: event.target.value
    });
  }

  generateQuestionsForm = () => {

    let choicesArray = this.props.inputData.map(
       (item) => (<option key={item.key}>{item.name}</option>));

    let allDataArray = [choicesArray];

    let headerArray = ["Tierart auswählen"];

    let solutionArray = [this.props.item.name];

    let elementDisabled = this.props.showTheOverlay || !this.props.gameRunning;

    if(this.props.showTheOverlay) {
      headerArray = [""];
    }

    let selectElementArray = this.state.fieldNames.map( (itemName, index) => {
      return (
      <GameSelectElement isDisabled={elementDisabled} 
                          name={itemName}
                          key={index}
                          value={(this.props.showTheOverlay) ? solutionArray[index] : this.state[itemName]}
                          changeHandler={this.handleOnChange}
                          selectOptions={allDataArray[index]}
                          selectHeader={headerArray[index]}
                          showResult={this.props.showTheOverlay}
                          userSolution={this.props.userSolution[index]}
                          />
      );
    });

    let questionsForm = (
      <form>
        <div className="form-group">
          {selectElementArray}
        </div>
      </form>
    );

    return questionsForm;
  }

  // render
  render() {

    let questionsForm = this.generateQuestionsForm();

    return (
			<div className="card">
        {(this.props.showTheOverlay) ? <div className="card-img-overlay"> <FeedbackOverlay result={this.props.reduxResult}/> </div> : null}
				<img src={this.props.item.imgPath} className="card-img-top"/>
				<div className="card-body">
					<h4 className="card-title">Tierart:</h4>
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

export default connect(mapStateToProps)(NabuAnimalCard);