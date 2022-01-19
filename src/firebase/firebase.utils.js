import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCWZel1wNE0d5k6hwjhScW7tRBPVnEfy3Y",
    authDomain: "ecommerce-clothing-9fea9.firebaseapp.com",
    projectId: "ecommerce-clothing-9fea9",
    storageBucket: "ecommerce-clothing-9fea9.appspot.com",
    messagingSenderId: "481389479447",
    appId: "1:481389479447:web:96608004ff56bf6bb27e52",
    measurementId: "G-JWSX0QWH1V"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompy: "select_account"});
  export const signInWithGoogle  = () => auth.signInWithPopup(provider);

  export default firebase;

