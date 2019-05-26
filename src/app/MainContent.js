import React, {Component} from 'react';
import huntingPeriods from './huntingPeriods';
import AnimalItem from './AnimalItem';

class MainContent extends Component {
  constructor() {
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

    this.handleOnChange = this.handleOnChange.bind(this);
    this.nextItem = this.nextItem.bind(this);
    this.checkSolution = this.checkSolution.bind(this);
    this.advanceHandler = this.advanceHandler.bind(this);
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
    } else {
      console.log("Wrong");
      this.setState({
        showSolutionFeedback: true,
        result: false 
      });
    }

  }

  advanceHandler() {
    const nextItem = (this.state.currentItem + 1)%this.state.dates.length;
    this.setState({
      currentItem: nextItem,
      showSolutionFeedback: false,
      result: false 
    });
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
      <main>
        {(!this.state.showSolutionFeedback) ?
         <div className={"card-container"}>
           <AnimalItem item={this.state.dates[this.state.currentItem]} feedbackState={false} handler={this.checkSolution} /> 
          <aside className="sidebar">
              <p>Geben Sie die Jagdzeiten in der Form 01-15 für den 15. Januar an.</p>
          </aside>
         </div>
         :
         <div className={"card-container"}>
           <AnimalItem item={this.state.dates[this.state.currentItem]} feedbackState={true} result={this.state.result} handler={this.advanceHandler} /> 
           <aside className="sidebar">
             <p>Geben Sie die Jagdzeiten in der Form 01-15 für den 15. Januar an.</p>
           </aside>
         </div>
        }
      </main>
      );
  }
}

export default MainContent;
