import React, {Component} from "react";
import pigeonsData from './pigeonsdata';
import { pigeonsNames } from './pigeonsdata';
import { connect } from 'react-redux';
import ResultCard from '../ResultCard';
import PigeonsGameInfo from "./PigeonsGameInfo";
import PigeonsAnimalCardLevelTwo from "./PigeonsAnimalCardLevelTwo";

class PigeonsGameLevelTwo extends Component {
  constructor(props) {
    super();
    let theData = pigeonsData;
    theData = this.shuffle(theData);

    this.state = {
      startDate: "",
      endDate: "",
      thePigeons: theData,
      allNames: pigeonsNames,
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
      thePigeons: {},
      currentItem: 0,
    });

    this.props.dispatch({type: 'RESET'});
  }

  componentDidMount() {
    console.log("Component did mount PigeonsGameLevelTwo");
    this.props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: this.state.thePigeons.length} );
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
      thePigeons: theData,
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

    if (userSolution.type === item.children) {
        typeResult = true;
        points += 25.0;
    } else {
        console.log("children wrong " + userSolution.type);
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
        userSolution.type === item.children &&
        userSolution.breeding === item.breeding &&
        userSolution.eggs === item.eggs) {
            userResult = true;
        }

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
    const nextItem = (this.state.currentItem + 1)%this.state.thePigeons.length;

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
            <PigeonsAnimalCardLevelTwo item={this.state.thePigeons[this.state.currentItem]} 
                             solutionHandler={this.checkSolution} 
                             inputData={this.state.allNames} 
                             continueHandler={this.advanceHandler}/>
          : 
            <PigeonsAnimalCardLevelTwo item={this.state.thePigeons[this.state.currentItem]} 
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
                  <PigeonsGameInfo resetHandler={this.resetGameState} />
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

export default connect(mapStateToProps)(PigeonsGameLevelTwo);