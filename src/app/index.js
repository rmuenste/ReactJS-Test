/*
This is the entry point of the react application
it contains a call to the ReactDOM method "render"
the rendered component is an App component
*/
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// call the render function
ReactDOM.render(<App />, document.getElementById('root'));
