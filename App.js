import React, { Component } from 'react';
import firebase from '@firebase/app'
import '@firebase/auth'
import { Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './src/reducers'
import LoginForm from './src/components/LoginForm'
import Router from './src/router'

export default class App extends Component {
  
  componentWillMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyB3ucA_1U1zhV_AmkEZmVe-SbKVhOhMdQ8',
      authDomain: 'ogrencikayit-98329.firebaseapp.com',
      databaseURL: 'https://ogrencikayit-98329.firebaseio.com',
      projectId: 'ogrencikayit-98329',
      storageBucket: 'ogrencikayit-98329.appspot.com',
      messagingSenderId: '744420677734',
      appId: '1:744420677734:web:ca4b72aa75e6f642d275a7'
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }


  render() {
   const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store = { store }>
          <Router />
      </Provider>
    );
  }
  
}


