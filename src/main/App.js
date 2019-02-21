import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import HeaderComponents from '../components/header/header';
import MainRoute from '../routers/routers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        	<HeaderComponents/>
        </header>
        <MainRoute/>
      </div>
    );
  }
}

export default App;
