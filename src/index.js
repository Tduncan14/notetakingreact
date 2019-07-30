import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const firebase = require('firebase');
require('firebase/firestore');

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyAjgf-DgBE7bVGzOV171i1jbGfq0bLMmDI",
    authDomain: "evernote-clone-9ad62.firebaseapp.com",
    databaseURL: "https://evernote-clone-9ad62.firebaseio.com",
    projectId: "evernote-clone-9ad62",
    storageBucket: "evernote-clone-9ad62.appspot.com",
    messagingSenderId: "195287500365",
    appId: "1:195287500365:web:70378cfbb5c777d5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
