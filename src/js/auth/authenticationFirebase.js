import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { showFormLogin, closeFormLoginRegister, resetFform } from "../registerLoginForm";
import { refs } from "../refs";

// // Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAI1BJ85yh87lUFEz2tWAxiWAX4MIS7p4U",
  authDomain: "team-js-filmoteka.firebaseapp.com",
  projectId: "team-js-filmoteka",
  storageBucket: "team-js-filmoteka.appspot.com",
  messagingSenderId: "420203055088",
  appId: "1:420203055088:web:5fa03a9e406adf1dc4ff35",
  measurementId: "G-6V5KHRSHSH"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const user = auth.currentUser;

// if (user) {
//   // User is signed in, see docs for a list of available properties
//   // https://firebase.google.com/docs/reference/js/firebase.User
//   // ...
// } else {
//   // No user is signed in.
// }



//listen for auth status changes
// function loginLogout() {
//   onAuthStateChanged(user => {
//     if (user) {
//        document.getElementById('result-box').style.display = "inline";
//     // refs.btnLogin.classList.add('is-hidden');
//       refs.btnLoginout.style.display = "inline";
//   } else {
//     // refs.btnLogin.classList.add('display-block');
      
//     }
// });
// }

  

refs.btnSigninForm.addEventListener('click', function (e) {
  e.preventDefault();
  const loginEmail = document.getElementById('login-email').value;
  const loginPassword = document.getElementById('login-password').value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById('result-box').style.display = "inline";
    // resetFform();
    closeFormLoginRegister();
    // loginLogout();
    
    // window.location.href ="../../team-js-filmoteka/library.html";
  document.getElementById('result').innerHTML = "Welcome Back<br>" + loginEmail + " was login Successufully";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
        document.getElementById('result-box').style.display = "inline";
    closeFormLoginRegister();
    document.getElementById('result').innerHTML= "Sorry ! <br>"+errorMessage;
  });

});


refs.btnSignupForm.addEventListener('click', function (e) {
  e.preventDefault();
  const registerEmail = document.getElementById('register-email').value;
  const registerPassword = document.getElementById('register-password').value;

  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById('result-box').style.display = "inline";
    resetFform();
    closeFormLoginRegister();
    // window.location.href ="../../team-js-filmoteka/library.html";
    document.getElementById('result').innerHTML = "Welcome <br>" + registerEmail + " was Registered Successufully";
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
        document.getElementById('result-box').style.display = "inline";
    closeFormLoginRegister();
    document.getElementById('result').innerHTML= "Sorry ! <br>"+errorMessage;
  });

});

const logout = () => {
  signOut(auth).then(() => {
    document.getElementById('result-box').style.display = "none";
    refs.signinForm.style.display = "inline";
    resetFform();
  }).catch((error) => {
    document.getElementById('result').innerHTML = "Sorry ! <br>" + errorMessage;
    resetFform();
  });
};


 
refs.btnLogin.addEventListener('click', showFormLogin);
refs.btnLoginout.addEventListener('click', logout);



// document.addEventListener('DOMContentLoaded', () => {
//    if (window.location.search === '') {
//       return;
//    }
//    const searchParams = window.location.search.split('?')[1].split('&');
//    if (searchParams[0] === 'myLibrary') {
//       loginLogout();
//    }
// });