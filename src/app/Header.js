import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
      <header className="myHeader">
        <div className='header-nav'>
          <div className='header-logo'>
            <img src="images/Logo-hunt-green.png"/>
          </div>
          <div className='header-menu-text'>
            <strong>Home        Item        Item        Item</strong>
          </div> 
        </div>
          <div className='header-text'>
          <h1>Testen Sie Ihr Jagdwissen</h1>
          Ist Ihr Wissen auf dem neusten Stand?
          </div>
      </header>
    );
  }
}

export default Header;
