import React, {Component} from 'react';
import Nav from './components/Nav';
import './index.css';

class App extends Component {
 state = {
      nav: [
        {
          id: 1,
          title: 'Hjem',
          Marked: false
        },
        {
          id: 1,
          title: 'Privat',
          Marked: false
        },
        {
          id: 1,
          title: 'Erhverv',
          Marked: false
        },
        {
          id: 1,
          title: 'Kontakt',
          Marked: false
        },
      ]
 };


 render(){
  return (
    <div className="App">
      <nav>
      <div className='ul'>
      <Nav nav={this.state.nav}/>
      </div>
      </nav>
    </div>
  );
 }
}

export default App;
