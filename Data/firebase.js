import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA6Ba8ryoBKiZfKTa5QnuB2wrpwIc3YB4E",
    authDomain: "catalogoplay-9fc7d.firebaseapp.com",
    projectId: "catalogoplay-9fc7d",
    storageBucket: "catalogoplay-9fc7d.appspot.com",
    messagingSenderId: "171967516238",
    appId: "1:171967516238:web:2d2375f96f5a98fdb1bd1f",
    measurementId: "G-C1VB8T343Q"
  };

  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();
