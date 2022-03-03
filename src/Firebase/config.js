import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDR8VFwQHDNXhNZx3vYgwthH7v59WiwzZw",
    authDomain: "test-c0b49.firebaseapp.com",
    projectId: "test-c0b49",
    storageBucket: "test-c0b49.appspot.com",
    messagingSenderId: "321593407927",
    appId: "1:321593407927:web:1439afbcffb7656abf1032",
    measurementId: "G-S94B6J16VM"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };