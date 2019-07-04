import React from 'react';
import {connect} from 'react-redux';

class DebugCard extends React.Component {
  constructor() {
    super();
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

    return(
        <div className="card">
        <div className="card-header">
            Gezeiten
        </div>
        <div className="card-body">
            <h5 className="card-title">{barValue + "%"}</h5>

            <div className="mylist">
                <ul>
                    <li>Zufällige Antworten vorgegeben</li>
                    <li>Wählen Sie den Beginn und</li>
                    <li>Das Ende der Jagdzeit aus</li>
                    <li>Meistern Sie 14 Tierarten</li>
                </ul>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Schwierigkeit</label>
                    <select className="form-control" id="exampleFormControlSelect1">
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
            <button type="button" className="btn btn-primary btn-block">Start</button>	
        </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    correctAnswers: state.correctAnswers,
    progress: state.progress,
    totalQuestions: state.totalQuestions
  }
}

export default connect(mapStateToProps)(DebugCard);