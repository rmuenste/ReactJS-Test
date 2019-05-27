/*
This is the entry point of the react application
it contains a call to the ReactDOM method "render"
the rendered component is an App component
*/
import React from "react";
import ReactDOM from "react-dom";

import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";

import App from "./App";

const reducer = (state = { showTheOverlay: true }, 
                action) => {
                    switch(action.type) {
                        case "TOGGLE":
                            state = {
                                ...state,
                                showTheOverlay: !state.showTheOverlay
                            }
                            break;
                    }
                    return state;
                }

const store = createStore(reducer);

store.subscribe(() => {
  console.log("Store updated!", store.getState());
})

// call the render function
ReactDOM.render(
                <Provider><App /></Provider>,
                document.getElementById('root'));
