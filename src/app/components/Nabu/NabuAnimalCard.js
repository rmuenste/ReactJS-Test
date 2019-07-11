
import React, {Component} from 'react';
import {connect} from 'react-redux';

class NabuAnimalCard extends Component {
  constructor() {
    super();
    this.state = {
      startDate: "",
      endDate: "",
    };

  }

  handleContinue = () => {
    console.log("Handler!");
    this.props.continueHandler();
  }

  handleSolution = () => {

  }

  // An event handler has an event parameter
  handleOnChange = (event) => {

  }

  // render
  render() {
    return (
			<div className="card">
				<img src={this.props.item.imgPath} className="card-img-top"/>
				<div className="card-body">
					<h4 className="card-title">Tierart:</h4>
						<form>
							<div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1"  
                                    disabled={false}
                                    name="startDate" 
                                    onChange={this.handleOnChange}>
									<option>Tierart auswählen</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
							</select>
							</div>
						</form>
                <button className="btn btn-primary btn-block" onClick={this.handleContinue}>Weiter!</button>
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

export default connect(mapStateToProps)(NabuAnimalCard);