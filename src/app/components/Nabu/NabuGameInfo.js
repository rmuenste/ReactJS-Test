import React, {Component} from "react";
import {connect} from 'react-redux';

class NabuGameInfo extends Component {
  constructor(props) {
    super();
  }

  toggleGame = () => {
    if(this.props.gameRunning) {
      this.props.resetHandler();
    } else {
      this.props.dispatch( {type: 'TOGGLE_GAME_RUNNING'} );
    }
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

    let buttonText = "Start";
    if(this.props.gameRunning)
      buttonText = "Beenden";

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
                    <select className="form-control" id="exampleFormControlSelect1" disabled={true}>
                    <option>Level 1</option>
                    <option>Level 2</option>
                    <option>Level 3</option>
                    </select>
                </div>
            </form>
            <label htmlFor="progress1">Punktestand</label>
            <div className="progress" id="progress1">
                <div className={barStyle} role="progressbar" style={{width: progressBarValue}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <label htmlFor="progress2">Verbleibende Fragen:</label>
            <h5 className="card-title" id="progress2">{this.props.totalQuestions - this.props.progress}</h5>
            <button type="button" className="btn btn-primary btn-block" onClick={this.toggleGame}>{buttonText}</button>	
        </div>
    </div>

<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        modal text
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

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
