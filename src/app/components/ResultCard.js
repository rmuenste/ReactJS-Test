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

    let medalLink = "images/lemon.png";

    if(percentage > 90.0) {
        medalLink = "images/goldmedal.png";
    }
    else if(percentage > 75.0) {
        medalLink = "images/silvermedal.png";
    }
    else if(percentage > 65.0) {
        medalLink = "images/bronzemedal.png";
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
    totalQuestions: state.totalQuestions
  }
}

export default connect(mapStateToProps)(ResultCard);