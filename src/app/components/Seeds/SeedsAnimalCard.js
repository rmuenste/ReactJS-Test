import React, {Component} from 'react';
import {connect} from 'react-redux';
import FeedbackOverlay from "../FeedbackOverlay";
import GameSelectElement from "../GameSelectElement/GameSelectElement";

class SeedsAnimalCard extends Component {
  constructor() {
    super();
    this.state = {
      animalName: "",
      endDate: "",
      fieldNames: ["animalName"]
    };
  }

  handleContinue = () => {
    console.log("continueHandler!");
    console.log(this.props);
    this.props.continueHandler();
  }

  handleSolution = () => {
    this.props.solutionHandler(this.props.item, this.state.animalName);

    this.setState({
      animalName: "",
      fieldNames: ["animalName"]
    });
  }

  // An event handler has an event parameter
  handleOnChange = (event) => {
    // destructure the object
    const {name, value, type, checked} = event.target;
    type === "checkBox" ? this.setState({[name]: checked}) :
    this.setState({
      [name]: event.target.value
    });
  }

  generateQuestionsForm = () => {

    let choicesArray = this.props.inputData.map(
       (item) => (<option key={item.key}>{item.name}</option>));

    let elementDisabled = this.props.showTheOverlay;

    let allDataArray = [choicesArray];

    let headerArray = ["Saatgut auswählen"];

//    let solutionArray = [this.props.item.name, this.props.item.type, this.props.item.breeding, this.props.item.eggs];

    if(this.props.showTheOverlay) {
      headerArray = ["", "", "", ""];
    }

    let selectElementArray = this.state.fieldNames.map( (itemName, index) => {
      return (
      <GameSelectElement isDisabled={elementDisabled} 
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

    let questionsForm = (
      <form>
        <div className="form-group">
                      <select className="form-control" id="exampleFormControlSelect1"  
                              disabled={false}
                              value={this.state.animalName}
                              name="animalName" 
                              onChange={this.handleOnChange}>
            <option>Saatgut auswählen</option>
            {choicesArray}
        </select>
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
					<h4 className="card-title">Saatgut:</h4>
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

export default connect(mapStateToProps)(SeedsAnimalCard);