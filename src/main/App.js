import React, { Component } from 'react';
import './App.css';
import HeaderComponent from '../components/header/header';
import FooterComponent from '../components/footer/footer';
import BodyComponent from '../components/body/body';
import MainRoute from '../routers/routers';
// import fireBase from '../js/firebase';
import fireBase from '../js/firebase';

class App extends Component {
  componentDidMount() {
    console.log('componentDidMount Hi');
    console.log(fireBase);
    // fireBase.auth().createUserWithEmailAndPassword(
    //   'ngohoai.phuong@gmail.com', '1234qwer'
    //   )
    //   .catch(function(user) {
    //     console.log(user);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    fireBase.auth().signOut().then(() => {
      console.log('signOut');
    })
    fireBase.auth().signInWithEmailAndPassword(
      'ngohoai.phuong@gmail.com', '1234qwer'
      ).then(() => {
        fireBase.database().ref('nails/users').push({
          email: 'ngohoai.phuong@gmail.com',
          phone: '0908899470'
        });
      });
      fireBase.database().ref('nails/users').on('child_removed',function(datasSnapshot){
      		  console.log(datasSnapshot);
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
