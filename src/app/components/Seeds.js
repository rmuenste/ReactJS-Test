import React, {Component} from "react";
import SeedsGameLevelOne from "./Seeds/SeedsGameLevelOne";
import {connect} from 'react-redux';
import SeedsGameIntro from "./Seeds/SeedsGameIntro";

class Seeds extends Component {
  constructor(props) {
    super();
  }

  resetGameState = () => {
    // TODO: Implement a function that
    // sets the game state back to its
    // initial state

    this.props.dispatch({type: 'RESET'});
  }

  gameLevelChanged = () => {

  }

  render () {
    let GameComponent = (<SeedsGameLevelOne setLevelHandler={this.gameLevelChanged}/>);

    return (
      <div className="container-fluid padding">
          <SeedsGameIntro />
          {GameComponent}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    showOverlay: state.showTheOverlay,
    progress: state.progress,
    gameRunning: state.gameRunning,
    totalQuestions: state.totalQuestions,
    level: state.gameLevel
  }
}

export default connect(mapStateToProps)(Seeds);