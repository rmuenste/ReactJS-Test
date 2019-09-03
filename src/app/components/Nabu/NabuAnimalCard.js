import React, {Component} from 'react';
import {connect} from 'react-redux';
import FeedbackOverlay from "../FeedbackOverlay";
import { shuffleNames } from "../../modules/Shuffle";

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
      choices: namesElementArray
    };

  }

  componentDidUpdate(prevProps) {
    if (this.props.item.name !== prevProps.item.name) {

      let namesArray = this.generateRandomAnswers(this.props);
      namesArray = shuffleNames(namesArray);
      let namesElementArray = namesArray.map(
        (value, index) => (<option key={index}>{value}</option>)
      );

      this.setState({
        choices: namesElementArray
      });

    }
  }

  handleContinue = () => {
    console.log("continueHandler!");
    console.log(this.props);
    this.props.continueHandler();
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
//    }, () => {
//      console.log("Name: " + this.state.animalName);
//    });
  }

  // render
  render() {

    let selectClass = "custom-select";
    if (this.props.showTheOverlay) {
      if (this.props.reduxResult === false)
        selectClass = "custom-select my-select";
      else
        selectClass = "custom-select my-select-success";
    }

    let selectComponent = (
    <select className={selectClass} id="exampleFormControlSelect1"  
                      disabled={this.props.showTheOverlay}
                      value={this.state.animalName}
                      name="animalName" 
                      onChange={this.handleOnChange}>
    <option>Tierart auswählen</option>
    {this.state.choices}
    </select>);

    if (this.props.showTheOverlay) {
    selectComponent = (
    <select className={selectClass} id="exampleFormControlSelect1"  
                      disabled={this.props.showTheOverlay}
                      >
    <option>{this.props.item.name}</option>
    </select>);
    }

    return (
			<div className="card">
        {(this.props.showTheOverlay) ? <div className="card-img-overlay"> <FeedbackOverlay result={this.props.reduxResult}/> </div> : null}
				<img src={this.props.item.imgPath} className="card-img-top"/>
				<div className="card-body">
					<h4 className="card-title">Tierart:</h4>
						<form>
							<div className="form-group">
                {selectComponent}
							</div>
						</form>
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