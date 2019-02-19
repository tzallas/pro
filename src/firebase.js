import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyBe7zld8G1hiXu_VsMDNYjNsYQ1ewMAmL4",
    authDomain: "pro-stats.firebaseapp.com",
    databaseURL: "https://pro-stats.firebaseio.com",
    projectId: "pro-stats",
    storageBucket: "pro-stats.appspot.com",
    messagingSenderId: "376181805789"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();

  