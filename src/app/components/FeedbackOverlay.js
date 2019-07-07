
import React, {Component} from "react";
import Tickmark from "./Tickmark";
import Cross from "./Cross";

function FeedbackOverlay(props) {
    return (
        <div>
          {props.result ? <Tickmark /> : <Cross />}
        </div>
    );

}

export default FeedbackOverlay;