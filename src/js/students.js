(() => {
  const refs = {
      openModalBtn: document.querySelector('.team-data-open'),
      closeModalBtn: document.querySelector('.team-data-close'),
      modal: document.querySelector('.team-data'),
      backdrop: document.querySelector('.backdrop__students'),
  };

  refs.openModalBtn.addEventListener('click', onOpenModal);
  refs.closeModalBtn.addEventListener('click', onCloseModal);

  function onOpenModal(e) {
      e.preventDefault()
      document.body.style.overflow = 'hidden';
      refs.modal.classList.remove('is-hidden');
      refs.modal.classList.add('mount');
      refs.backdrop.addEventListener('click', modalCloseClickBackdrop);
      document.addEventListener('keydown', modalCloseEsc);
  }

  function modalCloseClickBackdrop(e) {
      if (e.target === e.currentTarget) {
          onCloseModal()
      }
  }

  function modalCloseEsc(e) {
      if (e.code === 'Escape') {
          onCloseModal()
      }
  }

  function onCloseModal() {
      refs.modal.classList.add('is-hidden');
      refs.modal.classList.remove('mount');
      document.removeEventListener('keydown', modalCloseEsc);
      document.body.style.overflow = 'initial';  
  }
})();