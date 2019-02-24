import React, { Component } from 'react';
import './App.css';
import HeaderComponent from '../components/header/header';
import FooterComponent from '../components/footer/footer';
import BodyComponent from '../components/body/body';
import MainRoute from '../routers/routers';

class App extends Component {
  render() {
    return (
    	<div className="App">
  			<HeaderComponent/>
    		<BodyComponent/>
    		<MainRoute/>
        <FooterComponent/>
    	</div>
    );
  }
}

export default App;
