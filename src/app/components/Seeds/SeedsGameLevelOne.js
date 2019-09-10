import React, {Component} from "react";
import SeedsAnimalCard from "./SeedsAnimalCard";
import seedsData from './seedsdata';
import { controllerStatePrototype } from './seedsdata';
import { connect } from 'react-redux';
import ResultCard from '../ResultCard';
import SeedsGameInfo from "./SeedsGameInfo";
import shuffle from "../../modules/Shuffle";

class SeedsGameLevelOne extends Component {
  constructor(props) {
    super();
    let theData = seedsData;

    theData = shuffle(theData);

    this.state = {
      theSeeds: theData,
      ...controllerStatePrototype
    };

    props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
  }

  componentWillUnmount() {
    this.setState({
      theSeeds: {},
      ...controllerStatePrototype
    });

    this.props.dispatch({type: 'RESET'});
  }

  componentDidMount() {
    console.log("Component did mount maincontent");
    this.props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: this.state.theSeeds.length} );
  }

  resetGameState = () => {

    let theData = seedsData;
    theData = shuffle(theData);

    this.setState({
      theSeeds: theData,
      ...controllerStatePrototype
    });

    this.props.dispatch({type: 'RESET'});
    this.props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
  }

  // An event handler has an event parameter
  checkSolution = (item, userSolution) => {

    let solutionStateArray = [false];

    if(userSolution === item.name) {
      solutionStateArray[0] = true;
      this.props.dispatch( {type: 'RESULT_OK'} );
    } else {
      this.props.dispatch( {type: 'RESULT_WRONG'} );
    }

    this.setState({solutionState: solutionStateArray})
  }

  advanceHandler = () => {
    const nextItem = (this.state.currentItem + 1)%this.state.theSeeds.length;

    this.setState({
      currentItem: nextItem,
    });
    this.props.dispatch( {type: 'HIDE_OVERLAY'} );
  }

  render() {
      let seedsCard = "";
      if (this.props.progress === this.props.totalQuestions && !this.props.showTheOverlay) {
        seedsCard = (
          <ResultCard />
        );
      } else {
        seedsCard = (
          (!this.props.showTheOverlay) ?
            <SeedsAnimalCard item={this.state.theSeeds[this.state.currentItem]} 
                             solutionHandler={this.checkSolution} 
                             inputData={this.state.allNames} 
                             continueHandler={this.advanceHandler}
                             userSolution={this.state.solutionState}
                             />
          : 
            <SeedsAnimalCard item={this.state.theSeeds[this.state.currentItem]} 
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
                  <SeedsGameInfo resetHandler={this.resetGameState} />
              </div>
              <div className="col-md-4">
                  {seedsCard}
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

export default connect(mapStateToProps)(SeedsGameLevelOne);