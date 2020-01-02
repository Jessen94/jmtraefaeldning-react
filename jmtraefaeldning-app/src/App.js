import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './components/pages/home';
import Private from './components/pages/private';
import Business from './components/pages/business';
import About from './components/pages/about';
import Carousel from './components/layout/carousel';

class App extends Component {
 
 render(){
  return (
    <Router>
    <div className="App">
     <div className="container">
        <Header />
        <Carousel />
        <Route exact path="/" render={props => (
            <Home />
        )} />
        <Route path="/privat" Component={Private} render={props => (
            <Private />      
        )} />
        <Route path="/erhverv" render={props => (   
            <Business />
        )} />
        <Route path="/kontakt"  render={props => (
            <About />
        )} />
      <Footer />
     </div>
    </div>
    </Router>
  );
 }
}

export default App;
