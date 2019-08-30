import React, {Component} from "react";
import birdsofpreyData from './birdsofpreydata';
import { birdsofpreyNames } from './birdsofpreydata';
import { connect } from 'react-redux';
import ResultCard from '../ResultCard';
import BirdsOfPreyGameInfo from "./BirdsOfPreyGameInfo";
import BirdsOfPreyAnimalCardLevelTwo from "./BirdsOfPreyAnimalCardLevelTwo";
import shuffle from "../../modules/Shuffle";

class BirdsOfPreyGameLevelTwo extends Component {
  constructor(props) {
    super();
    let theData = birdsofpreyData;
    theData = shuffle(theData);

    this.state = {
      startDate: "",
      endDate: "",
      theBirdsOfPrey: theData,
      allNames: birdsofpreyNames,
      currentItem: 0,
    };

//    props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
    props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
  }

  componentWillUnmount() {
    this.setState({
      startDate: "",
      endDate: "",
      theBirdsOfPrey: {},
      currentItem: 0,
    });

    this.props.dispatch({type: 'RESET'});
  }

  componentDidMount() {
    console.log("Component did mount BirdsOfPreyGameLevelTwo");
    this.props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: this.state.theBirdsOfPrey.length} );
  }

  resetGameState = () => {
    // TODO: Implement a function that
    // sets the game state back to its
    // initial state

    let theData = ducksData;
    theData = shuffle(theData);

    this.setState({
      startDate: "",
      endDate: "",
      theBirdsOfPrey: theData,
      currentItem: 0,
    });

    this.props.dispatch({type: 'RESET'});
    this.props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
  }

  // An event handler has an event parameter
  checkSolution = (item, userSolution) => {

    let userResult = false;

    let nameResult = false;
    let typeResult = false;
    let breedingResult = false;
    let eggsResult = false;

    let points = 0.0;

    if (userSolution.name === item.name) {
        nameResult = true;
        points += 25.0;
    } else {
        console.log("name wrong " + userSolution.name);
    }

    if (userSolution.flightType === item.type) {
        typeResult = true;
        points += 25.0;
    } else {
        console.log("type wrong " + userSolution.flightType);
    }

    if (userSolution.breeding === item.breeding) {
        breedingResult = true;
        points += 25.0;
    } else {
        console.log("breeding wrong " + userSolution.breeding);
    }

    if (userSolution.eggs === item.eggs) {
        eggsResult = true;
        points += 25.0;
    } else {
        console.log("eggs wrong " + userSolution.eggs);
    }

    if (userSolution.name === item.name &&
        userSolution.flightType === item.type &&
        userSolution.breeding === item.breeding &&
        userSolution.eggs === item.eggs) {
            userResult = true;
        }

    if(userResult || points >= 75.0) {
      console.log("CheckSolution: Correct");
      console.log("Points: " + points);
      this.props.dispatch( {type: 'RESULT_OK_POINTS', payload: points} );
    } else {
      console.log("Wrong");
      this.props.dispatch( {type: 'RESULT_WRONG_POINTS', payload: points} );
    }

  }

  advanceHandler = () => {
    const nextItem = (this.state.currentItem + 1)%this.state.theBirdsOfPrey.length;

    this.setState({
      currentItem: nextItem,
    });
    this.props.dispatch( {type: 'HIDE_OVERLAY'} );
  }

  render() {
      let ducksCard = "";
      if (this.props.progress === this.props.totalQuestions && !this.props.showTheOverlay) {
        ducksCard = (
          <ResultCard />
        );
      } else {
        ducksCard = (
          (!this.props.showTheOverlay) ?
            <BirdsOfPreyAnimalCardLevelTwo item={this.state.theBirdsOfPrey[this.state.currentItem]} 
                             solutionHandler={this.checkSolution} 
                             inputData={this.state.allNames} 
                             continueHandler={this.advanceHandler}/>
          : 
            <BirdsOfPreyAnimalCardLevelTwo item={this.state.theBirdsOfPrey[this.state.currentItem]} 
                             feedbackState={true} 
                             result={this.props.currentResult} 
                             inputData={this.state.allNames} 
                             continueHandler={this.advanceHandler}/>
        );
      }
  
      return (
        <div>
          <div className="row text-center padding">
              <div className="col-md-4">
                  <BirdsOfPreyGameInfo resetHandler={this.resetGameState} />
              </div>
              <div className="col-md-4">
                  {ducksCard}
              </div>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    totalQuestions : state.totalQuestions,
    showOverlay: state.showTheOverlay,
    progress: state.progress,
    gameRunning: state.gameRunning,
    currentResult: state.currentResult
  };
}

export default connect(mapStateToProps)(BirdsOfPreyGameLevelTwo);