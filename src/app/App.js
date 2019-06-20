import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

class App extends React.Component {

  render() {
    return (
      <div>
      <Header />
      <MainContent />
      </div>
    );
  }

}

export default App;
