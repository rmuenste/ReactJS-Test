import React, {Component} from 'react';
import {connect} from 'react-redux';
import FeedbackOverlay from "../FeedbackOverlay";
import { statePrototype } from "./birdsofpreydata";

class BirdsOfPreyAnimalCard extends Component {
  constructor() {
    super();
    // get the state prototype from the input file?
    this.state = {...statePrototype}; 
  }

  handleContinue = () => {
    console.log("continueHandler!");
    console.log(this.props);
    this.props.continueHandler();
  }

  handleSolution = () => {
    console.log("Name: " + this.state.name);
    let solutionObject =  {...this.state};

    this.props.solutionHandler(this.props.item, solutionObject);

    this.setState({...statePrototype});
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

  // render
  render() {
    let choicesArray = this.props.inputData.map(
       (item) => (<option key={item.key}>{item.name}</option>));

    let flightArray = [(<option key="1">Gleitstoßgreifer</option>), 
                       (<option key="2">Pirsch-Startfluggreifer</option>), 
                       (<option key="3">Späh-Stoßfluggreifer</option>)]; 

    return (
			<div className="card">
        {(this.props.showTheOverlay) ? <div className="card-img-overlay"> <FeedbackOverlay result={this.props.reduxResult}/> </div> : null}
				<img src={this.props.item.imgPath} className="card-img-top"/>
				<div className="card-body">
					<h4 className="card-title">Fragen:</h4>
						<form>
							<div className="form-group row">
                                <div className="col-sm-6">
                                <select className="form-control" id="exampleFormControlSelect1"  
                                        disabled={false}
                                        value={this.state.name}
                                        name="name" 
                                        onChange={this.handleOnChange}>
                                        <option>Tierart</option>
                                        {choicesArray}
                                </select>
                                </div>
                                <div className="col-sm-6">
                                <select className="form-control" id="exampleFormControlSelect1"  
                                        disabled={false}
                                        value={this.state.flightType}
                                        name="flightType" 
                                        onChange={this.handleOnChange}>
                                        <option>Flugverhalten</option>
                                        {flightArray}
                                </select>
                                </div>
                            </div>
							<div className="form-group row">
                                <div className="col-sm-6">
                                <select className="form-control" id="exampleFormControlSelect1"  
                                        disabled={false}
                                        value={this.state.breeding}
                                        name="breeding" 
                                        onChange={this.handleOnChange}>
                                        <option>Brutort</option>
                                        <option>Bodenbrüter</option>
                                        <option>Boden-Baumbrüter</option>
                                        <option>Baumbrüter</option>
                                        <option>Baum-Felsenbrüter</option>
                                        <option>Baum-Felsen-Bodenbrüter</option>
                                        <option>Felsenbrüter</option>
                                </select>
                                </div>
                                <div className="col-sm-6">
                                <select className="form-control" id="exampleFormControlSelect1"  
                                        disabled={false}
                                        value={this.state.eggs}
                                        name="eggs" 
                                        onChange={this.handleOnChange}>
                                        <option>Wieviele Eier?</option>
                                        <option>{this.props.item.eggs}</option>
                                </select>
                                </div>
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

export default connect(mapStateToProps)(BirdsOfPreyAnimalCard);