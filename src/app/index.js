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

/*
* The store globally stores the following variables for us
* showTheOverlay: Should we show the feedback overlay after user input?
* currentResult: Is the current user answer to the question correct or not
* totalQuestions: The total number of questions in the game
* remainingQuestions: The number of questions remaining until the game ends
* correctAnswers: Tracks the number of currently correct answered questions 
*/
const initialState = { 
    showTheOverlay: false,
    currentResult: false,
    correctAnswers: 0,
    totalQuestions: 100
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
                                    currentResult: true,
                                    correctAnswers: state.correctAnswers + 1 
                                }
                                break;
                            case "RESULT_WRONG":
                                state = {
                                    ...state,
                                    currentResult: false 
                                }
                                break;
                            case "SET_TOTAL_QUESTIONS":
                                state = {
                                    ...state,
                                    totalQuestions: action.payload
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
