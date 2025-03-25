// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCh0kOGPds4cDO9uzrbqd5KuSnsYl59f_E",
  authDomain: "landingpage-5d8d2.firebaseapp.com",
  projectId: "landingpage-5d8d2",
  storageBucket: "landingpage-5d8d2.appspot.com",
  messagingSenderId: "1045673043316",
  appId: "1:1045673043316:web:f0cc5d2b20464da334b821",
  measurementId: "G-L1KYRF8RBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { app, auth };