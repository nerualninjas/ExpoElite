// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChe3VwslABEmZ9S3WhNYPSJznPO8o9xms",
  authDomain: "expo-elite.firebaseapp.com",
  projectId: "expo-elite",
  storageBucket: "expo-elite.appspot.com",
  messagingSenderId: "3637542514",
  appId: "1:3637542514:web:ecf2ea198c842845950ceb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
