import React, {Component} from "react";
import DucksGameLevelOne from "./Ducks/DucksGameLevelOne";
import {connect} from 'react-redux';
import DucksGameIntro from "./Ducks/DucksGameIntro";

class Nabu extends Component {
  constructor(props) {
    super();
  }

  render () {
    return (
      <div className="container-fluid padding">
          <DucksGameIntro />
          <DucksGameLevelOne />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    showOverlay: state.showTheOverlay,
    progress: state.progress,
    gameRunning: state.gameRunning,
    totalQuestions: state.totalQuestions
  }
}

export default connect(mapStateToProps)(Nabu);