import React, {Component} from "react";
import GeeseGameLevelOne from "./Geese/GeeseGameLevelOne";
import GeeseGameLevelTwo from "./Geese/GeeseGameLevelTwo";
import {connect} from 'react-redux';
import GeeseGameIntro from "./Geese/GeeseGameIntro";

class Geese extends Component {
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
        GameComponent = (<GeeseGameLevelOne setLevelHandler={this.gameLevelChanged}/>);
    } else if (this.props.level == 2) {
        GameComponent = (<GeeseGameLevelTwo setLevelHandler={this.gameLevelChanged}/>);
    }

    return (
      <div className="container-fluid padding">
          <GeeseGameIntro />
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

export default connect(mapStateToProps)(Geese);