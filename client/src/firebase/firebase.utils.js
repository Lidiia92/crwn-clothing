import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBRbD7LAPZyIcZsF4CMsw65NoUZ03KpEfM",
  authDomain: "crwn-db-674a9.firebaseapp.com",
  databaseURL: "https://crwn-db-674a9.firebaseio.com",
  projectId: "crwn-db-674a9",
  storageBucket: "crwn-db-674a9.appspot.com",
  messagingSenderId: "971965484684",
  appId: "1:971965484684:web:7d3f6d9bdfa382f870f5a9",
  measurementId: "G-M49STQKJK4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
