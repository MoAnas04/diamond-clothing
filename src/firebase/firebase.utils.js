import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDbLfXFPcvecbb9kiSQBJA0W3bSeQ_q4Lw',
  authDomain: 'diamond-db-a56ff.firebaseapp.com',
  projectId: 'diamond-db-a56ff',
  storageBucket: 'diamond-db-a56ff.appspot.com',
  messagingSenderId: '531451986280',
  appId: '1:531451986280:web:8140c06a8f2934b75d96dd',
  measurementId: 'G-7S3MPV1ZMJ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
