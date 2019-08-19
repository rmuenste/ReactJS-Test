import React, {Component} from "react";
import BirdsOfPreyAnimalCard from "./BirdsOfPreyAnimalCard";
import birdsofpreyData from './birdsofpreydata';
import { birdsofpreyNames } from './birdsofpreydata';
import { connect } from 'react-redux';
import ResultCard from '../ResultCard';
import BirdsOfPreyGameInfo from "./BirdsOfPreyGameInfo";

class BirdsOfPreyGameLevelOne extends Component {
  constructor(props) {
    super();
    let theData = birdsofpreyData;
    theData = this.shuffle(theData);

    this.state = {
      startDate: "",
      endDate: "",
      theBirdsOfPrey: theData,
      allNames: birdsofpreyNames,
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
      theBirdsOfPrey: {},
      currentItem: 0,
    });

    this.props.dispatch({type: 'RESET'});
  }

  componentDidMount() {
    console.log("Component did mount maincontent");
    this.props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: this.state.theBirdsOfPrey.length} );
  }

  resetGameState = () => {
    // TODO: Implement a function that
    // sets the game state back to its
    // initial state

    let theData = birdsofpreyData;
    theData = this.shuffle(theData);

    this.setState({
      startDate: "",
      endDate: "",
      theBirdsOfPrey: theData,
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
    const nextItem = (this.state.currentItem + 1)%this.state.theBirdsOfPrey.length;

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
            <BirdsOfPreyAnimalCard item={this.state.theBirdsOfPrey[this.state.currentItem]} 
                             solutionHandler={this.checkSolution} 
                             inputData={this.state.allNames} 
                             continueHandler={this.advanceHandler}/>
          : 
            <BirdsOfPreyAnimalCard item={this.state.theBirdsOfPrey[this.state.currentItem]} 
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
                  <BirdsOfPreyGameInfo resetHandler={this.resetGameState} />
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

export default connect(mapStateToProps)(BirdsOfPreyGameLevelOne);