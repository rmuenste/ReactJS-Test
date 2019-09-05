import React, {Component} from 'react';
import {connect} from 'react-redux';
import FeedbackOverlay from "../FeedbackOverlay";
import GameSelectElement from "../GameSelectElement/GameSelectElement";

class DucksAnimalCard extends Component {
  constructor() {
    super();
    this.state = {
      animalName: "",
      duckType: "",
      breeding: "",
      eggs: ""
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
        eggs: ""
      });
    }
  }

  handleSolution = () => {
    // send the solution to the parent
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

  // An event handler has an event parameter
  testHandler = (event) => {
    // destructure the object
    const {name, value, type, checked} = event.target;
    console.log("Received: " + [name, value, type, checked]);
//    type === "checkBox" ? this.setState({[name]: checked}) :
//    this.setState({
//      [name]: value
//    });
  }

  generateQuestionsForm = () => {

    let choicesArray = this.props.inputData.map(
       (item) => (<option key={item.key}>{item.name}</option>));

    let swimArray = [(<option key="1">Schwimmente</option>), (<option key="2">Tauchente</option>), (<option key="3">Meeresente</option>)]; 

    let breedingArray = [(<option key="1">Bodenbrüter</option>), (<option key="2">Baumbrüter</option>), (<option key="3">Höhlenbrüter</option>)]; 

    let classSelectElement = ["custom-select","custom-select","custom-select","custom-select"];

    if (this.props.showTheOverlay) {
      for (const [idx, val] of this.props.userSolution.entries()) {
        if(val) 
          classSelectElement[idx] += " my-select-success";
        else
          classSelectElement[idx] += " my-select";
      }
    }

//      <select className={classSelectElement[0]} id="exampleFormControlSelect0"  
//              disabled={false}
//              value={this.state.animalName}
//              name="animalName" 
//              onChange={this.handleOnChange}>
//              <option>Entenart</option>
//              {choicesArray}
//      </select>




    let selectElementArray = [
      (
      <GameSelectElement isDisabled={false} 
                          name="animalName"
                          value={this.state.animalName}
                          changeHandler={this.handleOnChange}
                          selectOptions={choicesArray}
                          selectHeader="Entenart"
                          showResult={false}
                          userSolution={true}
                          />
      ),
      (
      <select className={classSelectElement[1]} id="exampleFormControlSelect1"  
              disabled={false}
              value={this.state.duckType}
              name="duckType" 
              onChange={this.handleOnChange}>
              <option>Entengruppe</option>
              {swimArray}
      </select>
      ),
      (
      <GameSelectElement isDisabled={false} 
                          name="breeding"
                          value={this.state.breeding}
                          changeHandler={this.handleOnChange}
                          selectOptions={breedingArray}
                          selectHeader="Brutort"
                          showResult={false}
                          userSolution={true}
                          />
      ),
      (
      <select className={classSelectElement[3]} id="exampleFormControlSelect3"  
              disabled={false}
              value={this.state.eggs}
              name="eggs" 
              onChange={this.handleOnChange}>
              <option>Anzahl Eier?</option>
              <option>{this.props.item.eggs}</option>
      </select>
      )

    ];

    if (this.props.showTheOverlay) {
      selectElementArray = [
      (
      <GameSelectElement isDisabled={true} 
                          name="animalName"
                          value={this.props.item.name}
                          changeHandler={this.handleOnChange}
                          selectOptions={choicesArray}
                          selectHeader=""
                          showResult={true}
                          userSolution={this.props.userSolution[0]}
                          />
      ),
      (
      <select className={classSelectElement[1]} id="exampleFormControlSelect1"  
              disabled={true}
              >
              <option>{this.props.item.type}</option>
      </select>
      ),
      (
      <GameSelectElement isDisabled={true} 
                          name="breeding"
                          value={this.props.item.breeding}
                          changeHandler={this.handleOnChange}
                          selectOptions={breedingArray}
                          selectHeader=""
                          showResult={true}
                          userSolution={this.props.userSolution[2]}
                          />
      ),
      (
      <select className={classSelectElement[3]} id="exampleFormControlSelect3"  
              disabled={true}
              >
              <option>{this.props.item.eggs}</option>
      </select>
      )

    ];
    }


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
            {(!this.props.showTheOverlay) ? 
            <button className="btn btn-primary btn-block" 
                    onClick={this.handleSolution} 
                    disabled={!this.props.gameRunning}>Fertig!</button> :
            <button className="btn btn-primary btn-block" 
                    onClick={this.handleContinue} 
                    disabled={!this.props.gameRunning}>Weiter!</button>
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

export default connect(mapStateToProps)(DucksAnimalCard);