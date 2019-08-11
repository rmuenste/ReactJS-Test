import React, {Component} from 'react';
import huntingPeriods from './huntingPeriods';
import AnimalCard from './AnimalCard';
import InfoCard from './InfoCard';
import GeneralInfoCard from './GeneralInfoCard';
import ResultCard from './ResultCard';
import { connect } from 'react-redux';
import GameIntro from './GameIntro';

class MainContent extends Component {
  constructor(props) {
    super();
    let theData = huntingPeriods;
    theData = this.shuffle(theData);
    this.state = {
      startDate: "",
      endDate: "",
      dates: theData,
      currentItem: 0,
      showSolutionFeedback: false,
      result: false
    };

    props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
    this.nextItem = this.nextItem.bind(this);
    this.checkSolution = this.checkSolution.bind(this);
    props.dispatch( {type: 'SET_LEVELONE_DATA', payload: this.generateDates(0)} );
    console.log("Constructor MainComponent");
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
    this.props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: this.state.dates.length} );
  }

  // An event handler has an event parameter
  handleOnChange = (event) => {
    // object destructuring
    const {name, value, type, checked} = event.target;
    type === "checkbox" ? this.setState({[name]: checked}) :
      // the [] brackets will turn the variable into the string
      this.setState({
        [name]: event.target.value
      });
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

  resetGameState = () => {
    // TODO: Implement a function that
    // sets the game state back to its
    // initial state
    let theData = huntingPeriods;
    theData = this.shuffle(theData);
    this.setState({
      startDate: "",
      endDate: "",
      dates: theData,
      currentItem: 0,
      showSolutionFeedback: false,
      result: false
    });
    this.props.dispatch({type: 'RESET'});
    this.props.dispatch( {type: 'SET_TOTAL_QUESTIONS', payload: theData.length} );
    this.props.dispatch( {type: 'SET_LEVELONE_DATA', payload: this.generateDates(0)} );
  }

  // An event handler has an event parameter
  checkSolution = (id, userStart, userEnd) => {
    let item = this.state.dates[id];
    if(userStart === item.begin && userEnd === item.end) {
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

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  generateDates = (currIdx) => {
    let gameData = [];

    let item = this.state.dates[currIdx];

    let beginSet = new Set();
    let endSet = new Set();

    beginSet.add(item.begin);
    endSet.add(item.end);

    while(beginSet.size < 3) {
      let nextIdx = this.getRandomInt(this.state.dates.length);
      item = this.state.dates[nextIdx];
      beginSet.add(item.begin);
    }

    while(endSet.size < 3) {
      let nextIdx = this.getRandomInt(this.state.dates.length);
      item = this.state.dates[nextIdx];
      endSet.add(item.end);
    }

    let beginIter = beginSet.values();
    
    for(let entry of beginIter) {
      gameData.push({begin: entry, end: ""});
    } 

    let endIter = endSet.values();
    let idx = 0;
    for(let entry of endIter) {
      gameData[idx].end = entry;
      idx++;
    } 

    return gameData;
  }

  advanceHandler = () => {
    const nextItem = (this.state.currentItem + 1)%this.state.dates.length;

    this.props.dispatch( {type: 'SET_LEVELONE_DATA', payload: this.generateDates(nextItem)} );

    this.setState({
      currentItem: nextItem,
      showSolutionFeedback: false,
      result: false 
    });
    this.props.dispatch( {type: 'HIDE_OVERLAY'} );
  }

  nextItem() {
    const nextItem = (this.state.currentItem + 1)%this.state.dates.length;
    this.setState({
      currentItem: nextItem 
    });
  }

  render() {

    this.props.dispatch( {type: 'SET_LEVELONE_DATA', payload: this.generateDates(this.state.currentItem)} );
    // Configure the main card before
    let mainCard = "";
    if (this.props.progress === this.props.totalQuestions && !this.state.showSolutionFeedback) {
      mainCard = (
        <ResultCard />
      );
    } else {
      mainCard = (
        (!this.state.showSolutionFeedback) ?
          <AnimalCard item={this.state.dates[this.state.currentItem]} feedbackState={false} handler={this.checkSolution} /> 
        : 
          <AnimalCard item={this.state.dates[this.state.currentItem]} feedbackState={true} result={this.state.result} handler={this.advanceHandler} /> 
      );
    }

    let infoData = this.state.dates[this.state.currentItem].infos;
    // return the actual JSX
    return (
      <div>
        <GameIntro />
        <div className="container-fluid padding">
          <div className="row text-center padding">
            <div className="col-md-4">
              <InfoCard resetHandler={this.resetGameState}/>
            </div>
            <div className="col-md-4">
              {mainCard}
            </div>
            {(this.props.progress === this.props.totalQuestions && !this.state.showSolutionFeedback) ?  
              null
            :
              <div className="col-md-4">
                <GeneralInfoCard infoData={infoData} resetHandler={this.resetGameState}/>
              </div>
            }
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

const mapDispatchToProps = dispatch => {
  return {
      toggleRunning: () => dispatch({type: "TOGGLE_GAME_RUNNING"}),
      showOverlay: () => dispatch({type: "SHOW_OVERLAY"}),
      hideOverlay: () => dispatch({type: "HIDE_OVERLAY"})
  }
};

export default connect(mapStateToProps)(MainContent);
