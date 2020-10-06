import firebase from "firebase/app";
import "firebase/storage";

const config = {
    apiKey: "AIzaSyA8LRF8Bad0r0Iw3ViaebsXiLDbKdee9QQ",
    authDomain: "parkr-23aa4.firebaseapp.comparkr-23aa4.firebaseapp.com",
    databaseURL: "https://parkr-23aa4.firebaseio.com",
    projectId: "parkr-23aa4",
    storageBucket: "parkr-23aa4.appspot.com",
    messagingSenderId: "555038020972"
  };
// Initialize Firebase

firebase.initializeApp(config);



export const storage = firebase.storage();
export default firebase;
