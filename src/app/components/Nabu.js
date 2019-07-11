import React, {Component} from "react";
import NabuGameInfo from "./Nabu/NabuGameInfo";
import NabuGameLevelOne from "./Nabu/NabuGameLevelOne";

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
        <div className="row text-center padding">
          <div className="col-md-4">
          <NabuGameInfo />
          </div>
          <div className="col-md-4">
            <NabuGameLevelOne />
        </div>
      </div>
    </div>
    );
  }

}

export default Nabu;