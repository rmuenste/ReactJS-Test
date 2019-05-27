import React from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Footer from './Footer';

class App extends React.Component {

  render() {
    return (
      <div>
      <Navbar />
      <MainContent />
      </div>
    );
  }

}

export default App;
