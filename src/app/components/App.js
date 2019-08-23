import React from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Carousel from './Carousel';
import SocialMediaInfo from './SocialMediaInfo';
import Footer from './Footer';
import Home from './Home';
import Nabu from './Nabu';
import Ducks from './Ducks';
import Geese from './Geese';
import Gulls from './Gulls';
import Pigeons from './Pigeons';
import Ravens from './Ravens';
import Chicken from './Chicken';
import Seeds from './Seeds';
import BirdsOfPrey from './BirdsOfPrey';
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component {
  
  render() {
    return (
        <Router>
          <div>
            <Navbar />
            <Carousel />
            {
            // The command "Route exact path='/'" matches '/' exactly
            // if "exact" was not specified then '/' would be matched even as
            // a prefix, i.e. in '/gezeiten'
            }
            <Route exact path="/" component={Home}/>
            <Route path="/gezeiten" component={MainContent}/>
            <Route path="/nabu" component={Nabu}/>
            <Route path="/ducks" component={Ducks}/>
            <Route path="/geese" component={Geese}/>
            <Route path="/gulls" component={Gulls}/>
            <Route path="/chicken" component={Chicken}/>
            <Route path="/pigeons" component={Pigeons}/>
            <Route path="/ravens" component={Ravens}/>
            <Route path="/seeds" component={Seeds}/>
            <Route path="/birdsofprey" component={BirdsOfPrey}/>
            <hr className="my-4"/>
            <SocialMediaInfo />
            <Footer />
          </div>
        </Router>
    );
  }

}

export default App;
