import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: 'crwn-db-eea1d.firebaseapp.com',
  databaseURL: 'https://crwn-db-eea1d.firebaseio.com',
  projectId: 'crwn-db-eea1d',
  storageBucket: 'crwn-db-eea1d.appspot.com',
  messagingSenderId: '69137687425',
  appId: `${process.env.REACT_APP_API_ID}`,
  measurementId: 'G-27LRVFPDDM',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// make prompt pop up for google sign in
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
