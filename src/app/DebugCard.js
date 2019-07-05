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
            Infos
        </div>
        <div className="card-body">
            <h5 className="card-title">Iltis</h5>

            <div className="mylist">
                <ul>
                    <li>38 Zähne</li>
                    <li>Raubtier</li>
                    <li>Stinkmarder</li>
                    <li>3 Monate Eiruhe</li>
                </ul>
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
    totalQuestions: state.totalQuestions
  }
}

export default connect(mapStateToProps)(DebugCard);