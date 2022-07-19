// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAI1BJ85yh87lUFEz2tWAxiWAX4MIS7p4U",
  authDomain: "team-js-filmoteka.firebaseapp.com",
  projectId: "team-js-filmoteka",
  storageBucket: "team-js-filmoteka.appspot.com",
  messagingSenderId: "420203055088",
  appId: "1:420203055088:web:5fa03a9e406adf1dc4ff35",
  measurementId: "G-6V5KHRSHSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);