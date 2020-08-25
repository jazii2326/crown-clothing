import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCKG3qCsa96ZK0j9SCp3W_Kg9hZn-PtTAI",
    authDomain: "crown-clothing-7cac6.firebaseapp.com",
    databaseURL: "https://crown-clothing-7cac6.firebaseio.com",
    projectId: "crown-clothing-7cac6",
    storageBucket: "crown-clothing-7cac6.appspot.com",
    messagingSenderId: "1050543624947",
    appId: "1:1050543624947:web:8773382c67d81ca9605d86",
    measurementId: "G-YLBNJMXWSD"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
