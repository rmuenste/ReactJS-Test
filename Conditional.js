import React, {Component} from "react";
import Cross from "./Cross";
import Tickmark from "./Tickmark";

class Conditional extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className={"card-container"}>
        <div className={"card__feedback"}>
          <div className={"svg-container"}>
          {this.props.result ? <Tickmark /> : <Cross />}
          </div>
          <div className={'input-container__feedback'}>
          <button onClick={this.props.handler}>Weiter!</button>
          </div>
        </div>
      </div>
    );
  }

}


export default Conditional;