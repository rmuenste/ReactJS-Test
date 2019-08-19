import React, {Component} from "react";
import BirdsOfPreyGameLevelOne from "./BirdsOfPrey/BirdsOfPreyGameLevelOne";
import BirdsOfPreyGameLevelTwo from "./BirdsOfPrey/BirdsOfPreyGameLevelTwo";
import {connect} from 'react-redux';
import BirdsOfPreyGameIntro from "./BirdsOfPrey/BirdsOfPreyGameIntro";

class BirdsOfPrey extends Component {
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
    let GameComponent = "";
    if (this.props.level == 1) {
        GameComponent = (<BirdsOfPreyGameLevelOne setLevelHandler={this.gameLevelChanged}/>);
    } else if (this.props.level == 2) {
        GameComponent = (<BirdsOfPreyGameLevelTwo setLevelHandler={this.gameLevelChanged}/>);
    }

    return (
      <div className="container-fluid padding">
          <BirdsOfPreyGameIntro />
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

export default connect(mapStateToProps)(BirdsOfPrey);