// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD-dnHoMaSyeJ6Hg5HqvsLDM6eaK7DfgAc",
    authDomain: "quantum-b2cb2.firebaseapp.com",
    projectId: "quantum-b2cb2",
    storageBucket: "quantum-b2cb2.appspot.com",
    messagingSenderId: "141629528071",
    appId: "1:141629528071:web:166d1ef49cbb72fe5372a2",
    measurementId: "G-XXMTDBFHZ7"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();