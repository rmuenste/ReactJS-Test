import React from 'react';
import { connect } from 'react-redux';

class ResultCard extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    let correct = parseInt(this.props.correctAnswers);
    let resultString = correct + "/" + parseInt(this.props.totalQuestions);
    let percentage = 100.0 *  this.props.correctAnswers / this.props.totalQuestions;
    let percentageString = percentage + "%";

    let medalLink = "assets/images/lemon.png";

    if(percentage > 90.0) {
        medalLink = "assets/images/goldmedal.png";
    }
    else if(percentage > 75.0) {
        medalLink = "assets/images/silvermedal.png";
    }
    else if(percentage > 65.0) {
        medalLink = "assets/images/bronzemedal.png";
    }

    let pointsResult = null;

    if (this.props.points === 0) {
      pointsResult = null;
    } else {

      let pointsPercentage = 100.0 *  (this.props.points / (this.props.totalQuestions * 100.0));
      pointsResult = (
      <ul>
          <li>{pointsPercentage}</li>
      </ul>
      );
    }

    return(
        <div className="card">
        <div className="card-header">
            Übersicht
        </div>
        <div className="card-body">
            <h5 className="card-title">Erreichte Punktzahl:</h5>
            <div className="mylist">
                <ul>
                    <li>{resultString} Antworten korrekt</li>
                </ul>
                <ul>
                    <li>{percentageString}</li>
                </ul>
                {pointsResult}
            </div>

            <h5 className="card-title">Resultat: </h5>
            <div>
                <img src={medalLink} alt="" className="img-fluid"/>
            </div>
        </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    correctAnswers: state.correctAnswers,
    totalQuestions: state.totalQuestions,
    points: state.points
  }
}

export default connect(mapStateToProps)(ResultCard);