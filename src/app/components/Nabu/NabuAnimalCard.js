import React, {Component} from 'react';
import {connect} from 'react-redux';
import FeedbackOverlay from "../FeedbackOverlay";

class NabuAnimalCard extends Component {
  constructor() {
    super();
    this.state = {
      animalName: "",
      endDate: "",
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
    this.props.solutionHandler(this.props.item, this.state.animalName);

    this.setState({
      animalName: ""
    });
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  generateRandomAnswers = () => {

    let answerSet = new Set();

    answerSet.add(this.props.item.name);

    while( answerSet.size < 8) {
      let idx = this.getRandomInt(this.props.inputData.length);
      answerSet.add(this.props.inputData[idx].name);
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
    let namesArray = this.generateRandomAnswers();
    namesArray = this.shuffle(namesArray);
    let namesElementArray = namesArray.map(
      (value, index) => (<option key={index}>{value}</option>)
    );

    return (
			<div className="card">
        {(this.props.showTheOverlay) ? <div className="card-img-overlay"> <FeedbackOverlay result={this.props.reduxResult}/> </div> : null}
				<img src={this.props.item.imgPath} className="card-img-top"/>
				<div className="card-body">
					<h4 className="card-title">Tierart:</h4>
						<form>
							<div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1"  
                                    disabled={false}
                                    value={this.state.animalName}
                                    name="animalName" 
                                    onChange={this.handleOnChange}>
									<option>Tierart auswählen</option>
                  {namesElementArray}
							</select>
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