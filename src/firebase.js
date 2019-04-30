import firebase from 'firebase/app'
import 'firebase/database'

// Initialize Firebase
// const config = {
//     apiKey: "AIzaSyB9AW-3OX7Asfsh2HQ4KW8A5FtyPXfMixw",
//     authDomain: "comments-devreactjs-dai.firebaseapp.com",
//     databaseURL: "https://comments-devreactjs-dai.firebaseio.com",
//     projectId: "comments-devreactjs-dai",
//     storageBucket: "comments-devreactjs-dai.appspot.com",
//     messagingSenderId: "884083053670"
//   };
//   firebase.initializeApp(config);

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBHdWMVdwyZ5Jbi1n2fDhbIhjba2Swa-Xk",
  authDomain: "budget-test-8c917.firebaseapp.com",
  databaseURL: "https://budget-test-8c917.firebaseio.com",
  projectId: "budget-test-8c917",
  storageBucket: "budget-test-8c917.appspot.com",
  messagingSenderId: "663337499772"
};
firebase.initializeApp(config);

export const database = firebase.database()


  
