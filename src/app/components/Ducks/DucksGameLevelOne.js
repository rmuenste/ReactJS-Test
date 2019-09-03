import React, {Component} from "react";
import DucksAnimalCard from "./DucksAnimalCard";
import ducksData from './ducksdata';
import { duckNames } from './ducksdata';
import { ducksGameInfo } from './ducksdata';
import { connect } from 'react-redux';
import ResultCard from '../ResultCard';
import DucksGameInfo from "./DucksGameInfo";
import shuffle from "../../modules/Shuffle";

class DucksGameLevelOne extends Component {
  constructor(props) {
    super();
    let theData = ducksData;
    theData = shuffle(theData);

    this.state = {
      startDate: "",
      endDate: "",
      theDucks: theData,
      allNames: duckNames,
      currentItem: 0,
    };

//    props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
    props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
  }

  componentWillUnmount() {
    this.setState({
      startDate: "",
      endDate: "",
      theDucks: {},
      currentItem: 0,
    });

    this.props.dispatch({type: 'RESET'});
  }

  componentDidMount() {
    console.log("Component did mount maincontent");
    this.props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: this.state.theDucks.length} );
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
      theDucks: theData,
      currentItem: 0,
    });

    this.props.dispatch({type: 'RESET'});
    this.props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
  }

  // An event handler has an event parameter
  checkSolution = (item, userSolution) => {

    if(userSolution === item.name) {
      console.log("CheckSolution: Correct");
      this.props.dispatch( {type: 'RESULT_OK'} );
    } else {
      console.log("Wrong");
      this.props.dispatch( {type: 'RESULT_WRONG'} );
    }

  }

  advanceHandler = () => {
    const nextItem = (this.state.currentItem + 1)%this.state.theDucks.length;

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
            <DucksAnimalCard item={this.state.theDucks[this.state.currentItem]} 
                             solutionHandler={this.checkSolution} 
                             inputData={this.state.allNames} 
                             continueHandler={this.advanceHandler}/>
          : 
            <DucksAnimalCard item={this.state.theDucks[this.state.currentItem]} 
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
                  <DucksGameInfo resetHandler={this.resetGameState} 
                                 title={ducksGameInfo.gameTitle} 
                                 subTitle={ducksGameInfo.gameDescLevel[this.props.level-1].subTitle}
                                 gameGoals={ducksGameInfo.gameDescLevel[this.props.level-1].gameGoals}
                                 />
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
    currentResult: state.currentResult,
    level: state.gameLevel
  };
}

export default connect(mapStateToProps)(DucksGameLevelOne);