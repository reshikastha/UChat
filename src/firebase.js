// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBBYyuuOWehHKcuY8SnXwV1SSKoLV2p0Dk",
  authDomain: "uchat-62b8b.firebaseapp.com",
  projectId: "uchat-62b8b",
  storageBucket: "uchat-62b8b.appspot.com",
  messagingSenderId: "829187379570",
  appId: "1:829187379570:web:feadaa292a01b7380e4deb",
  measurementId: "G-XVY998LG91"
};
// const firebaseApp = initializeApp(firebaseConfig);
// const db = firestore(firebaseApp)
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();
export {auth, provider};
export default db;

