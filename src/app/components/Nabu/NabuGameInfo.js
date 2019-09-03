import React, {Component} from "react";
import {connect} from 'react-redux';
import Modal from 'react-bootstrap4-modal';

class NabuGameInfo extends Component {
  constructor(props) {
    super();
    this.state = {
      modalVisible: false
    };
  }

  toggleGame = () => {
    if(this.props.gameRunning) {
      this.props.resetHandler();
    } else {
      this.props.dispatch( {type: 'TOGGLE_GAME_RUNNING'} );
    }
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

    return(
      <div> 

        <div className="card">
        <div className="card-header">
            Nabu
        </div>
        <div className="card-body">
            <h5 className="card-title">Spielregeln</h5>

            <div className="mylist">
                <ul>
                    <li>Tierarten unter Naturschutz</li>
                    <li>Zufällige Antworten vorgegeben</li>
                    <li>Identifizieren Sie die Tierart</li>
                    <li>Meistern Sie {this.props.totalQuestions} Tierarten</li>
                </ul>
            </div>
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
    totalQuestions: state.totalQuestions
  }
}

export default connect(mapStateToProps)(NabuGameInfo);
