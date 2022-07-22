// (() => {
//     const refs = {
//       openModalBtn: document.querySelector('[data-modal-open]'),
//       closeModalBtn: document.querySelector('[data-modal-close]'),
//       modal: document.querySelector('[data-modal]'),
//     };
  
//     refs.openModalBtn.addEventListener('click', toggleModal);
//     refs.closeModalBtn.addEventListener('click', toggleModal);
  
//     function toggleModal() {
//       refs.modal.classList.toggle('is-hidden');
//     }
//   })();

(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
        backSide: document.querySelectorAll('.students__card'),
        backdrop: document.querySelector('.backdrop__students'),
    };

    refs.openModalBtn.addEventListener('click', onOpenModal);


    refs.backSide.forEach((elem) => {
        elem.addEventListener('click', toggleBackSide);
        function toggleBackSide() {
            elem.classList.toggle('active');
        }
    })

    function onOpenModal(e) {
        e.preventDefault()
        refs.modal.classList.remove('is-hidden');
        refs.modal.classList.add('mount');
        refs.backdrop.addEventListener('click', modalCloseClickBackdrop);
        document.addEventListener('keydown', modalCloseEsc);
    }

    function modalCloseClickBackdrop(e) {
        if (e.target.nodeName === 'BACKDROP') {
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
        refs.modal.classList.remove('mount')
        document.removeEventListener('keydown', modalCloseEsc);
    }
})();

const scrollUpBtn = document.querySelector('#arrUp');

scrollUpBtn.addEventListener('click', scrollTop);

function scrollTop(e) {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

setInterval(function displayScrollTopBtn() {
  if (window.scrollY > 200) {
     scrollUpBtn.style.display = 'flex';
  } else {
    scrollUpBtn.style.display = 'none';
  }
}, 300);