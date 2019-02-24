import React, { Component } from 'react';
import './App.css';
import MainRoute from '../routers/main-router';
import Background from '../components/Banner/banner.js';
import '../components/Banner/banner.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Background/>
        </header>
        <div className="App-container">
          <MainRoute/>
        </div>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
