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
          id: 2,
          title: 'Privat',
          Marked: false
        },
        {
          id: 3,
          title: 'Erhverv',
          Marked: false
        },
        {
          id: 4,
          title: 'Kontakt',
          Marked: false
        },
      ]
 };


 setCurrentPage = (id) => {
   this.setState({
     nav: this.state.nav.map(Nav => {
       if(Nav.id === id){
       }
       else{
         
       }
       return Nav;
     })


   })
 };

 render(){
  return (
    <div className="App">
      <nav>
      <div className='ul'>
      <Nav nav={this.state.nav} CurrentPage={this.setCurrentPage}/>
      </div>
      </nav>
    </div>
  );
 }
}

export default App;
