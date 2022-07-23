// Import the functions you need from the SDKs you need
import { showRegisterError } from "../registerLoginForm";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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


const auth = getAuth();
// const createAccount = async (userName, email, password) => {
//   try 
// }
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

refs.registerFormCreatFormSignUp.addEventListener("submit", e => {
  e.preventDefault();
  const accountName = e.target.name.value.trim();
  const email = e.target.email.value;
  const password = e.target.password.value;

  if (!validateEmail(email)) {
    const error = { message: 'No validate email' };
    showRegisterError(error);
  } else if (!displayName) {
    const error = { message: 'No validate Name' };
    showRegisterError(error);
  } else {
    createAccount(userName, email, password);
  }
});
  
const validateEmail = email => {
   return String(email)
      .toLowerCase()
      .match(
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};


// Прослушать изменения статуса аутентификации вход или виход
