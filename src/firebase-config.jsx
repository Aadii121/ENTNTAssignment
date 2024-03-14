// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvW-wl9kZwrfTBKN_RJWtZKIfd7PVT7ls",
  authDomain: "react-firebase-2cdae.firebaseapp.com",
  projectId: "react-firebase-2cdae",
  storageBucket: "react-firebase-2cdae.appspot.com",
  messagingSenderId: "461513989859",
  appId: "1:461513989859:web:e9fe196cc759afc30e2fd6",
  measurementId: "G-FGDG9VTT8Z"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);
export const db = getFirestore(app);
