import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBD1cR0Y7FWUttSQpoMKUhyvH7hB5x5PFY',
  authDomain: 'crwn-db-eea1d.firebaseapp.com',
  databaseURL: 'https://crwn-db-eea1d.firebaseio.com',
  projectId: 'crwn-db-eea1d',
  storageBucket: 'crwn-db-eea1d.appspot.com',
  messagingSenderId: '69137687425',
  appId: '1:69137687425:web:ec68c86f57a16bba71fe80',
  measurementId: 'G-27LRVFPDDM',
};

export const createUserDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // get document refrence to specifid path
  const userRef = firestore.doc(`pengguna/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error create user', error.message);
    }
  }
  return userRef;
};
export const convertCollectionSnapshotToMap = (collections) => {
  const transformCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// make prompt pop up for google sign in
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
