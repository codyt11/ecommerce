import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyA_mhZLWJhX2q1h6PNnuQiADNtQ_FPZDNM",
    authDomain: "e-commerce-3bf70.firebaseapp.com",
    projectId: "e-commerce-3bf70",
    storageBucket: "e-commerce-3bf70.appspot.com",
    messagingSenderId: "702406499414",
    appId: "1:702406499414:web:aa9920dabb9accaca7eff7",
    measurementId: "G-JEJNSM3X2B"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;