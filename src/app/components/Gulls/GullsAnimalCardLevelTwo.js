import React, {Component} from 'react';
import {connect} from 'react-redux';
import FeedbackOverlay from "../FeedbackOverlay";
import GameSelectElement from "../GameSelectElement/GameSelectElement";

class GullsAnimalCard extends Component {
  constructor() {
    super();
    this.state = {
      animalName: "",
      duckType: "",
      breeding: "",
      eggs: "",
      fieldNames: ["animalName", "duckType", "breeding", "eggs"]
    };
  }

  handleContinue = () => {
    console.log("continueHandler!");
    console.log(this.props);
    this.props.continueHandler();
  }

  componentDidUpdate(prevProps) {
    // Clean the state when a new item is displayed
    if (this.props.item.name !== prevProps.item.name) {
      this.setState({
        animalName: "",
        duckType: "",
        breeding: "",
        eggs: "",
        fieldNames: ["animalName", "duckType", "breeding", "eggs"]
      });
    }
  }

  handleSolution = () => {
    this.props.solutionHandler(this.props.item, {
        name: this.state.animalName,
        type: this.state.duckType,
        breeding: this.state.breeding,
        eggs: this.state.eggs
    });
  }

  // An event handler has an event parameter
  handleOnChange = (event) => {
    // destructure the object
    const {name, value, type, checked} = event.target;
    type === "checkBox" ? this.setState({[name]: checked}) :
    this.setState({
      [name]: value
    });
  }

  generateQuestionsForm = () => {

    let choicesArray = this.props.inputData.map(
       (item) => (<option key={item.key}>{item.name}</option>));

    let answersArray = [(<option key="1">Nestflüchter</option>), (<option key="2">Nesthocker</option>), (<option key="3">Platzhocker</option>)]; 

    let breedingArray = [(<option key="1">Bodenbrüter</option>), (<option key="2">Baumbrüter</option>), (<option key="3">Höhlenbrüter</option>)]; 

    let eggsArray = [(<option key="1">{this.props.item.eggs}</option>)]; 

    let elementDisabled = this.props.showTheOverlay;

    let allDataArray = [choicesArray, answersArray, breedingArray, eggsArray];

    let headerArray = ["Möwenart", "Ablegetyp", "Brutort", "Anzahl Eier?"];

    let solutionArray = [this.props.item.name, this.props.item.type, this.props.item.breeding, this.props.item.eggs];

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
        <div className="form-group row">
          <div className="col-sm-6">
            {selectElementArray[0]}
          </div>
          <div className="col-sm-6">
            {selectElementArray[1]}
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6">
            {selectElementArray[2]}
          </div>
          <div className="col-sm-6">
            {selectElementArray[3]}
          </div>
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
					<h4 className="card-title">Fragen:</h4>
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

export default connect(mapStateToProps)(GullsAnimalCard);