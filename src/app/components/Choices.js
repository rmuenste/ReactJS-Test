import React, {Component} from "react";
import ChoiceGameController from "./ChoiceGame/ChoiceGameController";
import { controllerStatePrototype } from './Seeds/seedsdata';
import SeedsGameIntro from "./Seeds/SeedsGameIntro";
import {connect} from 'react-redux';
import seedsData from "./Seeds/seedsdata";

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
                                               gameDataJson={seedsData}
                                               controllerStatePrototype={controllerStatePrototype}
                         />);

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

export default connect(mapStateToProps)(Choices);