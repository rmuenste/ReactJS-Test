import React from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Carousel from './Carousel';
import GameIntro from './GameIntro';
import SocialMediaInfo from './SocialMediaInfo';
import Footer from './Footer';
import Home from './Home';
import Nabu from './Nabu';
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component {
  
  render() {
    //        <MainContent />
    return (
        <Router>
          <div>
            <Navbar />
            <Carousel />
            <GameIntro />
            <Route exact path="/" component={Home}/>
            <Route path="/gezeiten" component={MainContent}/>
            <Route path="/nabu" component={Nabu}/>
            <hr className="my-4"/>
            <SocialMediaInfo />
            <Footer />
          </div>
        </Router>
    );
  }

}

export default App;
