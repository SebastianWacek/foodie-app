import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAH3MOY6ldVJad-vFz_eYom7ujBwdjXchA",
    authDomain: "foodie-64500.firebaseapp.com",
    projectId: "foodie-64500",
    storageBucket: "foodie-64500.appspot.com",
    messagingSenderId: "444255309421",
    appId: "1:444255309421:web:e18d569f3bbccaff13f964",
    measurementId: "G-Y0M742T5CD"
  };
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };