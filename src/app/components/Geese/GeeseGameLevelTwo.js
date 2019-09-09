import React, {Component} from "react";
import geeseData from './geesedata';
import { geeseNames } from './geesedata';
import { connect } from 'react-redux';
import ResultCard from '../ResultCard';
import GeeseGameInfo from "./GeeseGameInfo";
import GeeseAnimalCardLevelTwo from "./GeeseAnimalCardLevelTwo";
import shuffle from "../../modules/Shuffle";

class GeeseGameLevelTwo extends Component {
  constructor(props) {
    super();

    let theData = geeseData;
    theData = shuffle(theData);

    let solutionStateArray = [false, false, false, false];

    this.state = {
      startDate: "",
      endDate: "",
      theGeese: theData,
      allNames: geeseNames,
      currentItem: 0,
      solutionState: solutionStateArray
    };

    props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
  }

  componentWillUnmount() {
    let solutionStateArray = [false, false, false, false];

    this.setState({
      startDate: "",
      endDate: "",
      theGeese: {},
      currentItem: 0,
      solutionState: solutionStateArray 
    });

    this.props.dispatch({type: 'RESET'});
  }

  componentDidMount() {
    console.log("Component did mount GeeseGameLevelTwo");
    this.props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: this.state.theGeese.length} );
  }

  resetGameState = () => {
    // TODO: Implement a function that
    // sets the game state back to its
    // initial state

    let theData = ducksData;
    theData = shuffle(theData);

    let solutionStateArray = [false, false, false, false];

    this.setState({
      startDate: "",
      endDate: "",
      theGeese: theData,
      currentItem: 0,
      solutionState: solutionStateArray 
    });

    this.props.dispatch({type: 'RESET'});
    this.props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
  }

  // An event handler has an event parameter
  checkSolution = (item, userSolution) => {

    let userResult = false;
    let solutionStateArray = [false, false, false, false];

    let nameResult = false;
    let typeResult = false;
    let breedingResult = false;
    let eggsResult = false;

    let points = 0.0;

    if (userSolution.name === item.name) {
        solutionStateArray[0] = true;
        nameResult = true;
        points += 25.0;
    } else {
        console.log("name wrong " + userSolution.name);
    }

    if (userSolution.type === item.type) {
        solutionStateArray[1] = true;
        typeResult = true;
        points += 25.0;
    } else {
        console.log("type wrong " + userSolution.type);
    }

    if (userSolution.breeding === item.breeding) {
        solutionStateArray[2] = true;
        breedingResult = true;
        points += 25.0;
    } else {
        console.log("breeding wrong " + userSolution.breedingResult);
    }

    if (userSolution.eggs === item.eggs) {
        solutionStateArray[3] = true;
        eggsResult = true;
        points += 25.0;
    } else {
        console.log("eggs wrong " + userSolution.eggsResult);
    }

    if (solutionStateArray[0] &&
        solutionStateArray[1] &&
        solutionStateArray[2] &&
        solutionStateArray[3]) {
            userResult = true;
        }

    this.setState({solutionState: solutionStateArray})

    if(userResult) {
      console.log("CheckSolution: Correct");
      console.log("Points: " + points);
      this.props.dispatch( {type: 'RESULT_OK'} );
    } else {
      console.log("Wrong");
      this.props.dispatch( {type: 'RESULT_WRONG'} );
    }

  }

  advanceHandler = () => {
    const nextItem = (this.state.currentItem + 1)%this.state.theGeese.length;

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
            <GeeseAnimalCardLevelTwo item={this.state.theGeese[this.state.currentItem]} 
                             solutionHandler={this.checkSolution} 
                             inputData={this.state.allNames} 
                             continueHandler={this.advanceHandler}
                             userSolution={this.state.solutionState}
                             />
          : 
            <GeeseAnimalCardLevelTwo item={this.state.theGeese[this.state.currentItem]} 
                             feedbackState={true} 
                             result={this.props.currentResult} 
                             inputData={this.state.allNames} 
                             continueHandler={this.advanceHandler}
                             userSolution={this.state.solutionState}
                             />
        );
      }
  
      return (
        <div>
          <div className="row text-center padding">
              <div className="col-md-4">
                  <GeeseGameInfo resetHandler={this.resetGameState} />
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

export default connect(mapStateToProps)(GeeseGameLevelTwo);