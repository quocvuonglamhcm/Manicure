import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import HeaderComponents from '../components/header/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <HeaderComponents/>
        </header>
      </div>
    );
  }
}

export default App;
