import React, {Component} from "react";
import seedsData from './seedsdata';
import { seedsNames } from './seedsdata';
import { connect } from 'react-redux';
import ResultCard from '../ResultCard';
import SeedsGameInfo from "./SeedsGameInfo";
import SeedsAnimalCardLevelTwo from "./SeedsAnimalCardLevelTwo";

class SeedsGameLevelTwo extends Component {
  constructor(props) {
    super();
    let theData = seedsData;
    theData = this.shuffle(theData);

    this.state = {
      startDate: "",
      endDate: "",
      theSeeds: theData,
      allNames: seedsNames,
      currentItem: 0,
    };

//    props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
    props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
  }

  shuffle(a) {
    let j, x, i,idtemp, keytemp;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[i].key = i;
        a[i].id = i+1;
        a[j] = x;
        x.id = j+1;
        x.key = j;
    }
    return a;
  }

  componentWillUnmount() {
    this.setState({
      startDate: "",
      endDate: "",
      theSeeds: {},
      currentItem: 0,
    });

    this.props.dispatch({type: 'RESET'});
  }

  componentDidMount() {
    console.log("Component did mount SeedsGameLevelTwo");
    this.props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: this.state.theSeeds.length} );
  }

  resetGameState = () => {
    // TODO: Implement a function that
    // sets the game state back to its
    // initial state

    let theData = ducksData;
    theData = this.shuffle(theData);

    this.setState({
      startDate: "",
      endDate: "",
      theSeeds: theData,
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

    if (userSolution.type === item.type) {
        typeResult = true;
        points += 25.0;
    } else {
        console.log("type wrong " + userSolution.type);
    }

    if (userSolution.breeding === item.breeding) {
        breedingResult = true;
        points += 25.0;
    } else {
        console.log("breeding wrong " + userSolution.breedingResult);
    }

    if (userSolution.eggs === item.eggs) {
        eggsResult = true;
        points += 25.0;
    } else {
        console.log("eggs wrong " + userSolution.eggsResult);
    }

    if (userSolution.name === item.name &&
        userSolution.type === item.type &&
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
    const nextItem = (this.state.currentItem + 1)%this.state.theSeeds.length;

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
            <SeedsAnimalCardLevelTwo item={this.state.theSeeds[this.state.currentItem]} 
                             solutionHandler={this.checkSolution} 
                             inputData={this.state.allNames} 
                             continueHandler={this.advanceHandler}/>
          : 
            <SeedsAnimalCardLevelTwo item={this.state.theSeeds[this.state.currentItem]} 
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
                  <SeedsGameInfo resetHandler={this.resetGameState} />
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

export default connect(mapStateToProps)(SeedsGameLevelTwo);