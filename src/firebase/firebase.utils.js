import * as firebase from 'firebase/app';
//in case we want to use google analytics with firebase
import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8HGavr4SFWRuKBfYxLkLOLDKLUhN3g8A",
  authDomain: "react-ecommerce-website-93540.firebaseapp.com",
  databaseURL: "https://react-ecommerce-website-93540.firebaseio.com",
  projectId: "react-ecommerce-website-93540",
  storageBucket: "react-ecommerce-website-93540.appspot.com",
  messagingSenderId: "827376162704",
  appId: "1:827376162704:web:57a49a2993360ecbfd8515",
  measurementId: "G-7N49Z88ZL9"
};

  //initialize firebase with the above config
  firebase.initializeApp(firebaseConfig);

  //in case we want to use google analytics with firebase
  firebase.analytics();


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;