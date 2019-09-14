import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import AddUser from './AddUser';

class App extends Component {
  
 
  render(){
    return (
      <div className="App">
      <h1 align = 'center'>My Application</h1>
     
      <List />
     
      </div>
    );
  }
 
}

export default App;
