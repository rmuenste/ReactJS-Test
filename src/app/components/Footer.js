import React from 'react';

const Footer = () => {
    return (
    <footer>
    <div className="container-fluid padding">
      <div className="row text-center">
        <div className="col-md-4">
            <img src="images/Logo-hunt-green.png"/>
          <hr className="light"/>
          <p>555-555-555</p>
          <p>email@myemail.com</p>
          <p>123 Fake Street</p>
          <p>City, State, 0000</p>
        </div>
        <div className="col-md-4">
          <hr className="light"/>
            <h5>Our Hours</h5>
          <hr className="light"/>
          <p>Monday: 9am - 5pm</p>
          <p>Saturday: 9am - 2pm</p>
          <p>Sunday: closed</p>
        </div>
        <div className="col-md-4">
          <hr className="light"/>
            <h5>Service Area</h5>
          <hr className="light"/>
          <p>City, State, 0000</p>
          <p>City, State, 0000</p>
          <p>City, State, 0000</p>
          <p>City, State, 0000</p>
        </div>
        <div className="col-12">
          <hr className="light-100"/>
            <h5>&copy; rm-software.com</h5>
        </div>
      </div>
    </div>
    </footer>
    );
}

export default Footer;
