import React, {Component} from "react";
import BreedingGameLevelOne from "./Breeding/BreedingGameLevelOne";
import BreedingGameLevelTwo from "./Breeding/BreedingGameLevelTwo";
import {connect} from 'react-redux';
import BreedingGameIntro from "./Breeding/BreedingGameIntro";

class Breeding extends Component {
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
        GameComponent = (<BreedingGameLevelOne setLevelHandler={this.gameLevelChanged}/>);
    } else if (this.props.level == 2) {
        GameComponent = (<BreedingGameLevelTwo setLevelHandler={this.gameLevelChanged}/>);
    }

    return (
      <div className="container-fluid padding">
          <BreedingGameIntro />
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

export default connect(mapStateToProps)(Breeding);