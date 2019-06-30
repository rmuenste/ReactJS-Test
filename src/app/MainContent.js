import React, {Component} from 'react';
import huntingPeriods from './huntingPeriods';
import AnimalCard from './AnimalCard';
import InfoCard from './InfoCard';
import { connect } from 'react-redux';

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
    this.handleOnChange = this.handleOnChange.bind(this);
    this.nextItem = this.nextItem.bind(this);
    this.checkSolution = this.checkSolution.bind(this);
    this.advanceHandler = this.advanceHandler.bind(this);
    props.dispatch( {type: 'SET_LEVELONE_DATA', payload: this.generateDates(0)} );
  }

  // An event handler has an event parameter
  handleOnChange(event) {
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

  // An event handler has an event parameter
  checkSolution(id, userStart, userEnd) {
    let item = this.state.dates[id];
    if(userStart === item.begin && userEnd === item.end) {
      console.log("CheckSolution: Correct");
      this.setState({
        showSolutionFeedback: true,
        result: true 
      });
      this.props.dispatch( {type: 'SHOW_OVERLAY'} );
      this.props.dispatch( {type: 'RESULT_OK'} );
    } else {
      console.log("Wrong");
      this.setState({
        showSolutionFeedback: true,
        result: false 
      });
      this.props.dispatch( {type: 'SHOW_OVERLAY'} );
      this.props.dispatch( {type: 'RESULT_WRONG'} );
    }

  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  generateDates = (currIdx) => {
    let gameData = [];

    let firstIdx = this.getRandomInt(this.state.dates.length);

    while(firstIdx === currIdx) {
      firstIdx = this.getRandomInt(this.state.dates.length);
    }

    let item = this.state.dates[firstIdx];

    gameData.push({
      begin: item.begin,
      end: item.end
    });

    let secondIdx = this.getRandomInt(this.state.dates.length);

    while((secondIdx === currIdx) || 
          (secondIdx === firstIdx) || 
          (
          (this.state.dates[firstIdx].begin !== this.state.dates[secondIdx].begin) &&
          (this.state.dates[firstIdx].second !== this.state.dates[secondIdx].second))
          ) {
      secondIdx = this.getRandomInt(this.state.dates.length);
    }

    item = this.state.dates[secondIdx];

    gameData.push({
      begin: item.begin,
      end: item.end
    });

    item = this.state.dates[currIdx];

    gameData.push({
      begin: item.begin,
      end: item.end
    });

    return gameData;
  }

  advanceHandler() {
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

//        <h1>Lösung</h1>
//        <h3>Von {this.state.dates[this.state.currentItem].begin} bis {this.state.dates[this.state.currentItem].end}</h3>
//        <button onClick={this.nextItem}>Weiter</button>

  render() {
    return (
      <div className="container-fluid padding">
        <div className="row text-center padding">
          <div className="col-md-4">
          <InfoCard />
          </div>
          <div className="col-md-4">
          {(!this.state.showSolutionFeedback) ?
            <AnimalCard item={this.state.dates[this.state.currentItem]} feedbackState={false} handler={this.checkSolution} /> 
          :
            <AnimalCard item={this.state.dates[this.state.currentItem]} feedbackState={true} result={this.state.result} handler={this.advanceHandler} /> 
          }
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showOverlay: state.showTheOverlay 
  }
}

const mapDispatchToProps = dispatch => {
  return {
      toggleOverlay: () => dispatch({type: "TOGGLE"}),
      showOverlay: () => dispatch({type: "SHOW_OVERLAY"}),
      hideOverlay: () => dispatch({type: "HIDE_OVERLAY"})
  }
};

export default connect(mapStateToProps)(MainContent);
