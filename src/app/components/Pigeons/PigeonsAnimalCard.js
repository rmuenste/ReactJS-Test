import React, {Component} from 'react';
import {connect} from 'react-redux';
import FeedbackOverlay from "../FeedbackOverlay";

class PigeonsAnimalCard extends Component {
  constructor() {
    super();
    this.state = {
      animalName: "",
      endDate: "",
    };
  }

  shuffle = (a) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  handleContinue = () => {
    console.log("continueHandler!");
    console.log(this.props);
    this.props.continueHandler();
  }

  handleSolution = () => {
    this.props.solutionHandler(this.props.item, this.state.animalName);

    this.setState({
      animalName: ""
    });
  }

  // An event handler has an event parameter
  handleOnChange = (event) => {
    // destructure the object
    const {name, value, type, checked} = event.target;
    //console.log("NabuAnimalCardHandleChange!" + " " + name);
    type === "checkBox" ? this.setState({[name]: checked}) :
    this.setState({
      [name]: event.target.value
    });
//    }, () => {
//      console.log("Name: " + this.state.animalName);
//    });
  }

  // render
  render() {
//    let namesArray = [...this.props.item.choices, this.props.item.name];
//    namesArray = this.shuffle(namesArray);
    let choicesArray = this.props.inputData.map(
       (item) => (<option key={item.key}>{item.name}</option>));
//     [
//		(<option key="0">1</option>),
//		(<option key="1">2</option>),
//		(<option key="2">3</option>)
//    ];

    return (
			<div className="card">
        {(this.props.showTheOverlay) ? <div className="card-img-overlay"> <FeedbackOverlay result={this.props.reduxResult}/> </div> : null}
				<img src={this.props.item.imgPath} className="card-img-top"/>
				<div className="card-body">
					<h4 className="card-title">{this.props.myCardTitle}</h4>
						<form>
							<div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1"  
                                    disabled={false}
                                    value={this.state.animalName}
                                    name="animalName" 
                                    onChange={this.handleOnChange}>
									<option>Tierart auswählen</option>
                  {choicesArray}
							</select>
							</div>
						</form>
                {(!this.props.showTheOverlay) ? <button className="btn btn-primary btn-block" onClick={this.handleSolution} disabled={!this.props.gameRunning}>Fertig!</button> :
                <button className="btn btn-primary btn-block" onClick={this.handleContinue} disabled={!this.props.gameRunning}>Weiter!</button>
                }
				</div>
			</div>      
      );
  }
}

const mapStateToProps = (state) => {
  return {
    reduxResult: state.currentResult,
    showTheOverlay: state.showTheOverlay,
    gameRunning: state.gameRunning,
    gameData: state.levelOneData
  }
}

export default connect(mapStateToProps)(PigeonsAnimalCard);