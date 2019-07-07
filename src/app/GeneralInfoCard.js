import React from 'react';
import {connect} from 'react-redux';

class GeneralInfoCard extends React.Component {
  constructor(props) {
    super();
  }
  render() {

    const generalItems = this.props.infoData.general.items.map((item, index) => (<li key={index.toString()}> {item.value}</li>));
    const reprodItems = this.props.infoData.reproduction.items.map((item, index) => (<li key={index.toString()}> {item.value}</li>));
    const foodItems = this.props.infoData.food.items.map((item, index) => (<li key={index.toString()}> {item.value}</li>));

    return(
        <div className="card">
        <div className="card-header">
            Infos
        </div>
        <div className="card-body">
            <h5 className="card-title">Allgemeine Infos</h5>
            <div className="mylist">
                <ul>
                  {generalItems}
                </ul>
            </div>
            <h5 className="card-title">Fortpflanzung</h5>
            <div className="mylist">
                <ul>
                  {reprodItems}
                </ul>
            </div>
            <h5 className="card-title">Nahrung</h5>
            <div className="mylist">
                <ul>
                  {foodItems}
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

export default connect(mapStateToProps)(GeneralInfoCard);