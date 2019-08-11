import React from 'react';
import {NavLink} from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <a href="#"><img src="images/Logo-hunt-green.png"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
              <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink to={"/"} exact className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={"/gezeiten"} className="nav-link">J-Zeit</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={"/nabu"} className="nav-link">Nabu</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={"/ducks"} className="nav-link">Enten</NavLink>
            </li>
          </ul>

        </div>
      </div>
    </nav>
    );
  }
}

export default Navbar;
