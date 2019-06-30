import React from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Carousel from './Carousel';
import GameIntro from './GameIntro';
import SocialMediaInfo from './SocialMediaInfo';
import Footer from './Footer';

class App extends React.Component {

  render() {
    return (
      <div>
      <Navbar />
      <Carousel />
      <GameIntro />
      <MainContent />
      <hr className="my-4"/>
      <SocialMediaInfo />
      <Footer />
      </div>
    );
  }

}

export default App;
