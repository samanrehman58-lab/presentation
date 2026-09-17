// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrwc7eLwmxo_RdHv4PIXnIeAcsirEDDis",
  authDomain: "presentation-40675.firebaseapp.com",
  projectId: "presentation-40675",
  storageBucket: "presentation-40675.firebasestorage.app",
  messagingSenderId: "182214718600",
  appId: "1:182214718600:web:34bf958aecb8bbc24edb3d",
  measurementId: "G-GEHYRK033B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);