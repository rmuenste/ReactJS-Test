import React, {Component} from "react";
import NabuAnimalCard from "./NabuAnimalCard";
import nabuBirds from './nabudata';
import { connect } from 'react-redux';
import ResultCard from '../ResultCard';
import NabuGameInfo from "./NabuGameInfo";

class NabuGameLevelOne extends Component {
  constructor(props) {
    super();
      
    let theData = nabuBirds;
    theData = this.shuffle(theData);

    this.state = {
      startDate: "",
      endDate: "",
      nabuData: theData,
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
      nabuData: {},
      currentItem: 0,
    });

    this.props.dispatch({type: 'RESET'});
  }

  componentDidMount() {
    console.log("Component did mount maincontent");
    this.props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: this.state.nabuData.length} );
  }

  resetGameState = () => {
    // TODO: Implement a function that
    // sets the game state back to its
    // initial state

    let theData = nabuBirds;
    theData = this.shuffle(theData);

    this.setState({
      startDate: "",
      endDate: "",
      nabuData: theData,
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
                            continueHandler={this.advanceHandler}/>
          : 
            <NabuAnimalCard item={this.state.nabuData[this.state.currentItem]} 
                            feedbackState={true} 
                            inputData={this.state.nabuData}
                            result={this.props.currentResult} 
                            continueHandler={this.advanceHandler}/>
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

export default connect(mapStateToProps)(NabuGameLevelOne);