import React, {Component} from "react";
import ChoiceGameView from "./ChoiceGameView";
import { connect } from 'react-redux';
import ResultCard from '../ResultCard';
import NabuGameInfo from "../Nabu/NabuGameInfo";
import NabuAnimalCard from "../Nabu/NabuAnimalCard";
import shuffle from "../../modules/Shuffle";

class ChoiceGameController extends Component {
  constructor(props) {
    super();
      
    let theData = props.gameDataJson;
    theData = shuffle(theData);

    this.state = {nabuData: theData, ...props.controllerStatePrototype};

    props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
  }

  componentWillUnmount() {
    this.setState({
      nabuData: {},
      ...this.props.controllerStatePrototype
    });
    this.props.dispatch({type: 'RESET'});
  }

  componentDidMount() {
    console.log("Component did mount maincontent");
    this.props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: this.state.nabuData.length} );
  }

  resetGameState = () => {

    let theData = this.props.gameDataJson;

    theData = shuffle(theData);

    this.setState({
      nabuData: theData,
      ...this.props.controllerStatePrototype
    });

    this.props.dispatch({type: 'RESET'});
    this.props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
  }

  // An event handler has an event parameter
  checkSolution = (item, userSolution) => {
    // Set the solution state array
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
    const nextItem = (this.state.currentItem + 1)%this.state.nabuData.length;

    this.setState({
      currentItem: nextItem,
    });
    this.props.dispatch( {type: 'HIDE_OVERLAY'} );
  }

  render() {
      let nabuCard = "";
      if (this.props.progress === this.props.totalQuestions && !this.props.showTheOverlay) {
        nabuCard = (
          <ResultCard />
        );
      } else {
        nabuCard = (
          (!this.props.showTheOverlay) ?
            <NabuAnimalCard item={this.state.nabuData[this.state.currentItem]} 
                            inputData={this.state.nabuData}
                            solutionHandler={this.checkSolution} 
                            continueHandler={this.advanceHandler}
                            userSolution={this.state.solutionState}
                            />
          : 
            <NabuAnimalCard item={this.state.nabuData[this.state.currentItem]} 
                            feedbackState={true} 
                            inputData={this.state.nabuData}
                            result={this.props.currentResult} 
                            continueHandler={this.advanceHandler}
                            userSolution={this.state.solutionState}
                            />
        );
      }
  
      return (
        <div>
          <div className="row text-center padding">
            <div className="col-md-4">
              <NabuGameInfo resetHandler={this.resetGameState} />
            </div>
            <div className="col-md-4">
              {nabuCard}
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

export default connect(mapStateToProps)(ChoiceGameController);