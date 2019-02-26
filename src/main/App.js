import React, { Component } from 'react';
import './App.css';
import HeaderComponent from '../components/header/header';
import FooterComponent from '../components/footer/footer';
import BodyComponent from '../components/body/body';
import MainRoute from '../routers/routers';
import fireBase from '../js/firebase'

class App extends Component {
	componentDidMount() {
	console.log('componentDidMount Hi');
	console.log(fireBase);
	// fireBase.auth().createUserAndRetrieveDataWithEmailAndPassword(
	// 'quocvuonglamhcm@gmail.com', 'Vuong12345')

	// 		.catch(function(user) {
	// 	    console.log(user);
	// 	    })
	// 	    .catch(function(error) {
	// 	    console.log(error);

	fireBase.auth().signOut().then(() => {
       console.log('signOut'); })
	fireBase.auth().signInWithEmailAndPassword(
		'quocvuonglamhcm@gmail.com', 'Vuong12345').then(() => {
       fireBase.database().ref('nails/users').push({
       	email: 'quocvuonglamhcm@gmail.com',
       	phone: '0969942689'
       });
	});
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
