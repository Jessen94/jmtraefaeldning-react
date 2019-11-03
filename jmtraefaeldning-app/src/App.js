import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './components/pages/home';
import Private from './components/pages/private';
import Business from './components/pages/business';
import About from './components/pages/about';
import Carousel from './components/layout/carousel';
import './reset.css';
import './index.css';
import './footer.css';
import './slideshow.css';


class App extends Component {
 
 render(){
  return (
    <Router>
    <div className="App">
     <div className="container">
        <Header />
        <Carousel/>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Home />
          </React.Fragment>
        )} />
        <Route path="/privat" render={props => (
          <React.Fragment>
            <Private />
          </React.Fragment>
        )} />
        <Route path="/erhverv" render={props => (
          <React.Fragment>
            <Business />
          </React.Fragment>
        )} />
        <Router path="/kontakt" render={props => (
          <React.Fragment>
            <About />
          </React.Fragment>
        )} />
      <Footer />
     </div>
    </div>
    </Router>
  );
 }
}

export default App;
