import React, {Component} from 'react';
import {connect} from 'react-redux';
import FeedbackOverlay from "./FeedbackOverlay";

class AnimalCard extends Component {
  constructor() {
    super();
    console.log("AnimalItem constructor");
    this.state = {
      startDate: "",
      endDate: "",
    };

  }

  handleContinue = () => {
    this.props.handler();
  }

  handleSolution = () => {

    this.props.handler(this.props.item.key, this.state.startDate, this.state.endDate),
    this.setState({
      startDate: "",
      endDate: "",
    });

  }

  // An event handler has an event parameter
  handleOnChange = (event) => {
    // object destructuring
    const {name, value, type, checked} = event.target;
    console.log("Select triggered: " + name);
    type === "checkbox" ? this.setState({[name]: checked}) :
      // the [] brackets will turn the variable into the string
      this.setState({
        [name]: event.target.value
      }, () => {
         console.log("Start date:" + this.state.startDate); 
         console.log("End date:" + this.state.endDate); 
      });
  }

  // render
  render() {
    return (
			<div className="card">
        {(this.props.showTheOverlay) ? <div className="card-img-overlay"> <FeedbackOverlay result={this.props.reduxResult}/> </div> : null}
				<img src={this.props.item.imgPath} className="card-img-top"/>
				<div className="card-body">
					<h4 className="card-title">{this.props.item.name}</h4>
						<form>
							<div className="form-group">
              <select className="form-control" id="exampleFormControlSelect1"  
                      disabled={this.props.showTheOverlay || !this.props.gameRunning} 
                      value={this.state.startDate} 
                      name="startDate" 
                      onChange={this.handleOnChange}>
									<option>Beginn der Jagdzeit</option>
									<option>{this.props.gameData[0].begin}</option>
									<option>{this.props.gameData[1].begin}</option>
									<option>{this.props.gameData[2].begin}</option>
							</select>
							</div>
							<div className="form-group">
              <select className="form-control" 
                      id="exampleFormControlSelect2" 
                      disabled={this.props.showTheOverlay || !this.props.gameRunning} 
                      value={this.state.endDate} 
                      name="endDate" 
                      onChange={this.handleOnChange}>
									<option>Ende der Jagdzeit</option>
									<option>{this.props.gameData[0].end}</option>
									<option>{this.props.gameData[1].end}</option>
									<option>{this.props.gameData[2].end}</option>
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

export default connect(mapStateToProps)(AnimalCard);