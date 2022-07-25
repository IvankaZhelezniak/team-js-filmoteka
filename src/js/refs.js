export { refs };

const refs = {
  gallery: document.querySelector('.js-gallery__list'),
  backdrop: document.querySelector('#backdrop'),
  body: document.querySelector('body'),
  btnCloseModalFilm: document.querySelector('#btn-close-modal'),
  imageModal: document.querySelector('#imageModal'),
  modalTitle: document.querySelector('#title'),
  modalTitleOriginal: document.querySelector('#titleOriginal'),
  voteModal: document.querySelector('#vote'),
  votesModal: document.querySelector('#votes'),
  popularityModal: document.querySelector('#popularity'),
  genreModal: document.querySelector('#genre'),
  overviewModal: document.querySelector('#overview'),
  modalBtn: document.querySelector('.js-modal-button'),
  searchForm: document.getElementById('form'),
  searchError: document.getElementById('input-error'),
  searchInput: document.querySelector('input[name="search"]'),
  modalBtnWatched: document.querySelector('[data-actions="watched"]'),
  modalBtnQueue: document.querySelector('[data-actions="queue"]'),

  btnWatched: document.querySelector('.watched-js'),
  watchedListRef: document.querySelector('.js-library__list'),

  themeBtnLibrary: document.querySelector('#theme-toggle__library'),
  themeBtnHtml: document.querySelector('#theme-toggle__html'),
  lightToggleIcon: document.querySelector('.lightToggleIcon'),
  darkToggleIcon: document.querySelector('.darkToggleIcon'),
  bodyHtml: document.querySelector('#body-html'),
  bodyLibrary: document.querySelector('#body-library'),
  modalFilmBackBlure: document.querySelector('.modal-film-back'),
  modalFilmBox: document.querySelector('.modal-film'),
  searchBox: document.querySelector('.search-box'),
  btnLibraryClickMe: document.querySelector('.btn'),
  // Рефи для регістрації і строрення аккаунта
  registerFormCreatFormSignUp: document.getElementById('creatFormSignUp'),
  divRegisterError: document.getElementById('divRegisterError'),

  	// Рефи для регістрації і строрення аккаунта
	// registerFormCreatFormSignUp: document.getElementById('creatFormSignUp'),
	// divRegisterError: document.getElementById('divRegisterError'),

  formaLoginCreatRegister: document.getElementById('formaLoginCreatRegister'),

  signinForm: document.getElementById('login-div'),
  signupForm: document.getElementById('register-div'),

  btnSignupForm: document.getElementById('register-btn'),
  btnSigninForm: document.getElementById('login-btn'),
  
  btnLogin: document.getElementById('btnLogin'),
  btnLoginout: document.getElementById('log-out-btn')
};
