import { refs} from "./refs";

document.getElementById('reg-btn').addEventListener('click', function () {
   refs.signupForm.style.display = "inline";
   refs.signinForm.style.display = "none";

})

document.getElementById('log-btn').addEventListener('click', function () {
   refs.signupForm.style.display = "none";
   refs.signinForm.style.display = "inline";
})


// Закриває форму логінізації при кліку на бекдроп
refs.formaLoginCreatRegister.addEventListener('click', e => {
   if (e.target === e.currentTarget) {
      resetFform();
       closeFormLoginRegister();
   }
});


// Показує форму логінізації
export const showFormLogin = () => {
   refs.formaLoginCreatRegister.classList.remove('is-hidden');
   window.addEventListener('keydown', closeFormLoginRegisterByKey);
}

// Закриває форму по Escape
const closeFormLoginRegisterByKey = (e) => {
   if (e.key === 'Escape') {
      closeFormLoginRegister();
      window.removeEventListener('keydown', closeFormLoginRegisterByKey);
   }
}

// Закриває форму логінізації
export const closeFormLoginRegister = () => {
refs.formaLoginCreatRegister.classList.add('is-hidden');
}

// обновляє форму
export const resetFform = () => {
      refs.signupForm.reset();
      refs.signinForm.reset();
};


