// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDJW8ed5JoJ2-A6paY2xFsgNrWDGw7Z0g",
  authDomain: "aceinterview-2c2ed.firebaseapp.com",
  projectId: "aceinterview-2c2ed",
  storageBucket: "aceinterview-2c2ed.firebasestorage.app",
  messagingSenderId: "193815386028",
  appId: "1:193815386028:web:9403db8d2e446684eb0c09",
  measurementId: "G-GSTZDBJVMG",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
