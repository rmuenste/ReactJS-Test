
import React, {Component} from "react";
import NabuAnimalCard from "./NabuAnimalCard";
import nabuBirds from './nabudata';
import { connect } from 'react-redux';
import ResultCard from '../ResultCard';

class NabuGameLevelOne extends Component {
  constructor(props) {
    super();
    let theData = nabuBirds;
//    theData = this.shuffle(theData);

    this.state = {
      startDate: "",
      endDate: "",
      nabuData: theData,
      currentItem: 0,
      result: false
    };

//    props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
    props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: 5} );
  }

  alertMessage = () => {
    window.alert("Alert message from child");
  }

  // An event handler has an event parameter
  checkSolution = (item, userSolution) => {

    if(userSolution === item.name) {
      console.log("CheckSolution: Correct");
      this.setState({
        showSolutionFeedback: true,
        result: true 
      });
      this.props.dispatch( {type: 'RESULT_OK'} );
    } else {
      console.log("Wrong");
      this.setState({
        showSolutionFeedback: true,
        result: false 
      });
      this.props.dispatch( {type: 'RESULT_WRONG'} );
    }

  }

  advanceHandler = () => {
    const nextItem = (this.state.currentItem + 1)%this.state.nabuData.length;

    this.setState({
      currentItem: nextItem,
      showSolutionFeedback: false,
      result: false 
    });
    this.props.dispatch( {type: 'HIDE_OVERLAY'} );
  }

  render() {
      let nabuCard = "";
      if (this.props.progress === this.props.totalQuestions && !this.state.showSolutionFeedback) {
        nabuCard = (
          <ResultCard />
        );
      } else {
        nabuCard = (
          (!this.state.showSolutionFeedback) ?
            <NabuAnimalCard item={this.state.nabuData[this.state.currentItem]} solutionHandler={this.checkSolution}/>
          : 
            <NabuAnimalCard item={this.state.nabuData[this.state.currentItem]} feedbackState={true} result={this.state.result} continueHandler={this.advanceHandler}/>
        );
      }
  
      return (
        <div>
        {nabuCard}
        </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    totalQuestions : state.totalQuestions,
    showOverlay: state.showTheOverlay,
    progress: state.progress,
    gameRunning: state.gameRunning
  };
}

export default connect(mapStateToProps)(NabuGameLevelOne);