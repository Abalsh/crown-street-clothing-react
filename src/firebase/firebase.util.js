import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC8OoMArQ1VeSbNts1Zk32eLq_Agghsmvs",
    authDomain: "crown-stree.firebaseapp.com",
    databaseURL: "https://crown-stree.firebaseio.com",
    projectId: "crown-stree",
    storageBucket: "",
    messagingSenderId: "634647433065",
    appId: "1:634647433065:web:035ccaf5d8d71693"
  };
// take user object and store in database 
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return; // if no user logged, return nothing

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       })
    } catch (error){
      console.log('error catching user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;