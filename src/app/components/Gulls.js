import React, {Component} from "react";
import GullsGameLevelOne from "./Gulls/GullsGameLevelOne";
import GullsGameLevelTwo from "./Gulls/GullsGameLevelTwo";
import {connect} from 'react-redux';
import GullsGameIntro from "./Gulls/GullsGameIntro";

class Gulls extends Component {
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
        GameComponent = (<GullsGameLevelOne setLevelHandler={this.gameLevelChanged}/>);
    } else if (this.props.level == 2) {
        GameComponent = (<GullsGameLevelTwo setLevelHandler={this.gameLevelChanged}/>);
    }

    return (
      <div className="container-fluid padding">
          <GullsGameIntro />
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

export default connect(mapStateToProps)(Gulls);