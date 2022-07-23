import refs from "./refs";

export const showRegisterError = error => {
   refs.divRegisterError.style.display = 'block';
   if (error.code === 'auth/weak-password') {
      if(localStorage.getItem('language') === 'ua'){
         refs.divRegisterError.innerHTML = `Пароль має містити не менше 6 символів.`;
      }
      else{
         refs.divRegisterError.innerHTML = `Password should be at least 6 characters.`;
      }
     
   } else if (error.code === 'auth/email-already-in-use') { 
        if(localStorage.getItem('language') === 'ua'){
         refs.divRegisterError.innerHTML = `E-mail вже використовується.`;}
      else{
         refs.divRegisterError.innerHTML = `Email already in use.`;
      }
   } else {
      refs.divRegisterError.innerHTML = `Error: ${error.message}`;
   }
};