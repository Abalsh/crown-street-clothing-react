import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC6d57Yui1yzqS73AUY4V6VPaLu9ClUay4",
    authDomain: "crown-street-wear.firebaseapp.com",
    databaseURL: "https://crown-street-wear.firebaseio.com",
    projectId: "crown-street-wear",
    storageBucket: "",
    messagingSenderId: "157770681568",
    appId: "1:157770681568:web:391342b0b37f9cc7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;