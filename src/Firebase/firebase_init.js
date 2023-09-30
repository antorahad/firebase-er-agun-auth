// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkGLI2PUrjqRpBdlOOTc4unrQRpIOrL0s",
  authDomain: "simple-firebase-d64cc.firebaseapp.com",
  projectId: "simple-firebase-d64cc",
  storageBucket: "simple-firebase-d64cc.appspot.com",
  messagingSenderId: "830394224440",
  appId: "1:830394224440:web:531688bc2395113ff73bcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app