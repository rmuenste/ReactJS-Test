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
            <li className="nav-item">
                <NavLink to={"/geese"} className="nav-link">Gänse</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={"/gulls"} className="nav-link">Möwen</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Federwild
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink to={"/ducks"} className="dropdown-item">Enten</NavLink>
                <NavLink to={"/geese"} className="dropdown-item">Gänse</NavLink>
                <NavLink to={"/gulls"} className="dropdown-item">Möwen</NavLink>
                <a className="dropdown-item" href="#">Wildhühner</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Greifvögel</a>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </nav>
    );
  }
}

export default Navbar;
