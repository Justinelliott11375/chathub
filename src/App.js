import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';

//firebase config
var firebaseConfig = {
  apiKey: "AIzaSyCpiPyD-5MvNFyMRI6H6pGn7UbTMPnYvQY",
  authDomain: "chat-hub-65a65.firebaseapp.com",
  databaseURL: "https://chat-hub-65a65.firebaseio.com",
  projectId: "chat-hub-65a65",
  storageBucket: "chat-hub-65a65.appspot.com",
  messagingSenderId: "946230590935",
  appId: "1:946230590935:web:fc02554ec137ff63ed5f92",
  measurementId: "G-J4W4NLV7W3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;
