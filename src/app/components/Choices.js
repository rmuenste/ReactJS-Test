import React, {Component} from "react";
import ChoiceGameController from "./ChoiceGame/ChoiceGameController";
import { controllerStatePrototype } from './Nabu/nabudata';
import NabuGameIntro from "./Nabu/NabuGameIntro";
import {connect} from 'react-redux';
import nabuBirds from './Nabu/nabudata';

class Choices extends Component {
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
    let GameComponent = (<ChoiceGameController 
                                               gameDataJson={nabuBirds}
                                               controllerStatePrototype={controllerStatePrototype}
                         />);

    return (
      <div className="container-fluid padding">
          <NabuGameIntro />
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

export default connect(mapStateToProps)(Choices);