import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import HeaderComponent from '../components/header/header';
import BodyComponent from '../components/body/body';
import MainRoute from '../routers/routers';

class App extends Component {
  render() {
    return (
    	<div className="App">
  			<HeaderComponent/>
    		<BodyComponent/>
    		<MainRoute/>
    	</div>
    );
  }
}

export default App;
