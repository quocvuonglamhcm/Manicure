import React, { Component } from 'react';
import './App.css';
import HeaderComponent from '../components/header/header';
import FooterComponent from '../components/footer/footer';
import BodyComponent from '../components/body/body';
import MainRoute from '../routers/routers';
import fireBase from './firebase'

class App extends Component {
  componentDidMount() {
    fireBase.auth().signInWithEmailAndPassword('tmtzminhtri111@gmail.com','123456')
      .then(() => {
        fireBase.database().ref('nails/users').on('child_removed', function(data){
          console.log(data);
        })
      })
  }
  render() {
    return (
    	<div className="App">
  			<HeaderComponent/>
    		<MainRoute/>
        <FooterComponent/>
    	</div>
    );
  }
}

export default App;
