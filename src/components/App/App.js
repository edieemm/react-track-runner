import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import Longest from '../Longest/Longest';


class App extends Component {
  render () {
    return (
    <div className="App">
      <Header />
      <Longest />
    </div>
    );
  }
}

export default App;
