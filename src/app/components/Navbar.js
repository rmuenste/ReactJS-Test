import React from 'react';

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
            <li className="nav-item active">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Gezeiten</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
    );
  }
}

export default Navbar;