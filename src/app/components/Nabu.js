import React, {Component, createRef} from "react";
import NabuGameLevelOne from "./Nabu/NabuGameLevelOne";
import {connect} from 'react-redux';

class Nabu extends Component {
  constructor(props) {
    super();
//    let theData = huntingPeriods;
//    theData = this.shuffle(theData);
//    this.state = {
//      startDate: "",
//      endDate: "",
//      dates: theData,
//      currentItem: 0,
//      showSolutionFeedback: false,
//      result: false
  }

//    props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
//    this.nextItem = this.nextItem.bind(this);
//    this.checkSolution = this.checkSolution.bind(this);
//    props.dispatch( {type: 'SET_LEVELONE_DATA', payload: this.generateDates(0)} );

  render () {
    return (
      <div className="container-fluid padding">
        <NabuGameLevelOne />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    showOverlay: state.showTheOverlay,
    progress: state.progress,
    gameRunning: state.gameRunning,
    totalQuestions: state.totalQuestions
  }
}

export default connect(mapStateToProps)(Nabu);