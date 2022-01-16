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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
