import React, {Component, createRef} from "react";
import NabuGameInfo from "./Nabu/NabuGameInfo";
import NabuGameLevelOne from "./Nabu/NabuGameLevelOne";
import {connect} from 'react-redux';

class Nabu extends Component {
  constructor(props) {
    super();
    this.inputRef = createRef();
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
  resetGameState = () => {

    this.intputRef.alertMessage();

  }

  render () {
    return (
      <div className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-md-4">
          <NabuGameInfo resetHandler={this.resetGameState} />
          </div>
          <div className="col-md-4">
            <NabuGameLevelOne ref={ref => {this.inputRef = ref;}}/>
        </div>
      </div>
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