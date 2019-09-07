import React, {Component} from 'react';
import {connect} from 'react-redux';
import FeedbackOverlay from "../FeedbackOverlay";

class BreedingAnimalCard extends Component {
  constructor() {
    super();
    this.state = {
      animalName: "",
      duckType: "",
      breeding: "",
      birth: "",
      eggs: ""
    };
  }

  shuffle = (a) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  handleContinue = () => {
    console.log("continueHandler!");
    console.log(this.props);
    this.props.continueHandler();
  }

  handleSolution = () => {
    let solutionObject =  {
        name: this.state.animalName,
        type: this.state.duckType,
        breeding: this.state.breeding,
        birth: this.state.birth,
        eggs: this.state.eggs
    };

    this.props.solutionHandler(this.props.item, {
        name: this.state.animalName,
        type: this.state.duckType,
        breeding: this.state.breeding,
        birth: this.state.birth,
        eggs: this.state.eggs
    });

    this.setState({
      animalName: "",
      duckType: "",
      breeding: "",
      birth: "",
      eggs: ""
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

  // render
  render() {
//    let namesArray = [...this.props.item.choices, this.props.item.name];
//    namesArray = this.shuffle(namesArray);
    let choicesArray = this.props.inputData.map(
       (item) => (<option key={item.key}>{item.name}</option>));

    let matingarray = [(<option key="1">{this.props.item.matingseason}</option>)]; 

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
                                        value={this.state.animalName}
                                        name="animalName" 
                                        onChange={this.handleOnChange}>
                                        <option>Tierart auswählen</option>
                                        {choicesArray}
                                </select>
                                </div>
                                <div className="col-sm-6">
                                <select className="form-control" id="exampleFormControlSelect1"  
                                        disabled={false}
                                        value={this.state.duckType}
                                        name="duckType" 
                                        onChange={this.handleOnChange}>
                                        <option>Paarungszeit</option>
                                        {matingarray}
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
                                        <option>Tragzeit</option>
                                        <option>{this.props.item.tragzeit}</option>
                                </select>
                                </div>
                                <div className="col-sm-6">
                                <select className="form-control" id="exampleFormControlSelect1"  
                                        disabled={false}
                                        value={this.state.eggs}
                                        name="eggs" 
                                        onChange={this.handleOnChange}>
                                        <option>Wieviele Junge?</option>
                                        <option>{this.props.item.children}</option>
                                </select>
                                </div>
                            </div>
							<div className="form-group row">
                <div className="col-sm-6">
                <select className="form-control" id="exampleFormControlSelect1"  
                        disabled={false}
                        value={this.state.birth}
                        name="birth" 
                        onChange={this.handleOnChange}>
                        <option>Setzzeit?</option>
                        <option>{this.props.item.birth}</option>
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

export default connect(mapStateToProps)(BreedingAnimalCard);