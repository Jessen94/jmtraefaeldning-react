import React, {Component} from 'react';
import Nav from './components/Nav'

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
 console.log(this.state.nav)
  return (
    <div className="App">
      <Nav />

    </div>
  );
 }
}

export default App;
