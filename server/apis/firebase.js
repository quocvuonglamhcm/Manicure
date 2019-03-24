const express = require('express')
const fb = require('firebase');

const config = {
  test: {
    apiKey: "AIzaSyDUmBiyuJgOUzYvghXjkn_8MBKwFRMzV4U",
  	authDomain: "nails-test.firebaseapp.com",
  	databaseURL: "https://nails-test.firebaseio.com",
  	projectId: "nails-test",
  	storageBucket: "nails-test.appspot.com",
  	messagingSenderId: "62775543575"
  }
};

const extensionEmail = '@nails.com'

const fireBaseClient = fb.initializeApp(config.test);

var FireBase = {
  login: function(phone_number, password) {
    const email = `${phone_number}${extensionEmail}`
    return fireBaseClient.auth().signInWithEmailAndPassword(email, password)
  },
  logout: function() {
    return fireBaseClient.auth().signOut();
  },
  logged: function() {
    
  }
}
module.exports = FireBase;
