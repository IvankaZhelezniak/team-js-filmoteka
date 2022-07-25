(() => {
    const refs = {
      openModalBtn: document.querySelector('[team-data-open]'),
      closeModalBtn: document.querySelector('[team-data-close]'),
      modal: document.querySelector('[team-data]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  }
 )();