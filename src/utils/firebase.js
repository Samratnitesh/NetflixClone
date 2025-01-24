// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCSRqiLvy81FvLJYzxrD3GKQg6XawV8Z4",
  authDomain: "netflixclone-1bc82.firebaseapp.com",
  projectId: "netflixclone-1bc82",
  storageBucket: "netflixclone-1bc82.firebasestorage.app",
  messagingSenderId: "300485721372",
  appId: "1:300485721372:web:3d26a3d87b55b5b2df0ed9",
  measurementId: "G-LP51DY2PNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
