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

const initialState = { 
    showTheOverlay: false,
    currentResult: false
};

const rootReducer = (state = initialState, 
                    action) => {
                        switch(action.type) {
                            case "TOGGLE":
                                state = {
                                    ...state,
                                    showTheOverlay: !state.showTheOverlay
                                }
                                break;
                            case "SHOW_OVERLAY":
                                state = {
                                    ...state,
                                    showTheOverlay: true 
                                }
                                break;
                            case "HIDE_OVERLAY":
                                state = {
                                    ...state,
                                    showTheOverlay: false 
                                }
                                break;
                            case "RESULT_OK":
                                state = {
                                    ...state,
                                    currentResult: true 
                                }
                                break;
                            case "RESULT_WRONG":
                                state = {
                                    ...state,
                                    currentResult: false 
                                }
                                break;
                        }
                        return state;
                    }

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log("Store updated!", store.getState());
})

// call the render function
ReactDOM.render(
                <Provider store={store}><App /></Provider>,
                document.getElementById('root'));
