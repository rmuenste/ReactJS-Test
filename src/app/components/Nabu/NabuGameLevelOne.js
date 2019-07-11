
import React, {Component} from "react";
import NabuAnimalCard from "./NabuAnimalCard";
import huntingPeriods from './nabudata';

class NabuGameLevelOne extends Component {
  constructor(props) {
    super();
    let theData = huntingPeriods;
//    theData = this.shuffle(theData);

    this.state = {
      startDate: "",
      endDate: "",
      nabuData: theData,
      currentItem: 0
    };

//    props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
//    this.nextItem = this.nextItem.bind(this);
//    this.checkSolution = this.checkSolution.bind(this);
//    props.dispatch( {type: 'SET_LEVELONE_DATA', payload: this.generateDates(0)} );
  }

  advanceHandler = () => {
    const nextItem = (this.state.currentItem + 1)%this.state.nabuData.length;

    this.setState({
      currentItem: nextItem,
    });
  }

  render() {
      return (
      <NabuAnimalCard item={this.state.nabuData[this.state.currentItem]} continueHandler={this.advanceHandler}/>
      );
  }
}

export default NabuGameLevelOne;