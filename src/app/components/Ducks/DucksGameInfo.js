import React, {Component} from "react";
import {connect} from 'react-redux';
import Modal from 'react-bootstrap4-modal';

class DucksGameInfo extends Component {
  constructor(props) {
    super();
    this.state = {
      modalVisible: false,
      level: 1
    };
  }

  toggleGame = () => {
    if(this.props.gameRunning) {
      this.props.resetHandler();
    } else {
      this.props.dispatch( {type: 'TOGGLE_GAME_RUNNING'} );
    }
  }

  // An event handler has an event parameter
  handleOnChange = (event) => {
    // destructure the object
    const {name, value, type, checked} = event.target;
    console.log("DucksGame Level changed!" + " " + value);
    type === "checkBox" ? this.setState({[name]: checked}) :
    this.setState({
      [name]: event.target.value
    });
//    }, () => {
//      console.log("Name: " + this.state.animalName);
//    });
    let levelValue = (value === "Level 1") ? 1 : 2;
    this.props.dispatch( {type: 'SET_LEVEL', payload: levelValue});
    console.log("DucksGame Level end!");
  }

  handleReset = () => {
    this.toggleGame();

    this.setState({
      modalVisible: false
    });
  }

  handleCancel = () => {
    this.setState({
      modalVisible: false
    });
  }
  
  showResetModal = () => {
    this.setState({
      modalVisible: true
    });
  }

  render() {

    let barValue = 100.0 * (this.props.correctAnswers/parseFloat(this.props.totalQuestions));
    let progressBarValue = barValue + "%";
    let barStyle = "progress-bar bg-danger";
    if ((barValue > 60.0) && (barValue < 80.0)) {
      barStyle = "progress-bar bg-warning";
    }
    if (barValue > 80.0) {
      barStyle = "progress-bar bg-success";
    }

    let gameControlButton = "";
    let buttonText = "Start";
    if(this.props.gameRunning) {
      buttonText = "Beenden";
      gameControlButton = (<button type="button" className="btn btn-primary btn-block" onClick={this.showResetModal}>{buttonText}</button>);
    } else {
      gameControlButton = (<button type="button" className="btn btn-primary btn-block" onClick={this.toggleGame}>{buttonText}</button>);
    }

    let levelOptions = "";
    if (this.props.gameLevel == 1) {
      levelOptions = [(<option key="level1">Level 1</option>), (<option key="level2">Level 2</option>)];
    } else {
      levelOptions = [(<option key="level2">Level 2</option>), (<option key="level1">Level 1</option>)];
    }

    return(
      <div> 

        <div className="card">
        <div className="card-header">
            Nabu
        </div>
        <div className="card-body">
            <h5 className="card-title">Spielregeln Level 1</h5>

            <div className="mylist">
                <ul>
                    <li>Tierarten unter Naturschutz</li>
                    <li>Zufällige Antworten vorgegeben</li>
                    <li>Identifizieren Sie die Tierart</li>
                    <li>Meistern Sie {this.props.totalQuestions} Tierarten</li>
                </ul>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Schwierigkeit</label>
                    <select className="form-control" id="exampleFormControlSelect1" value={this.state.level} onChange={this.handleOnChange}>
                    {levelOptions}
                    </select>
                </div>
            </form>
            <label htmlFor="progress1">Punktestand</label>
            <div className="progress" id="progress1">
                <div className={barStyle} role="progressbar" style={{width: progressBarValue}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <label htmlFor="progress2">Verbleibende Fragen:</label>
            <h5 className="card-title" id="progress2">{this.props.totalQuestions - this.props.progress}</h5>
            {gameControlButton}
        </div>
    </div>
      <Modal visible={this.state.modalVisible}>
        <div className="modal-header">
          <h5 className="modal-title">Spiel wird zurückgesetzt!</h5>
        </div>
        <div className="modal-body">
          <p>Möchten Sie wirklich beenden?</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={this.handleCancel}>
            Weiter
          </button>
          <button type="button" className="btn btn-primary" onClick={this.handleReset}>
            Beenden 
          </button>
        </div>
      </Modal>
</div>


    );
  }
}

const mapStateToProps = (state) => {
  return {
    correctAnswers: state.correctAnswers,
    progress: state.progress,
    gameRunning: state.gameRunning,
    gameLevel: state.gameLevel,
    totalQuestions: state.totalQuestions
  }
}

export default connect(mapStateToProps)(DucksGameInfo);
