import { refs } from '../refs';
import { movieClass } from './movieClass';
import {genres} from './genres';
import { btnModalClass } from '../modal/btnModalClass';
import { onModalBtnClick } from '../modal/modalAddToLSWatchedQueue';

refs.gallery.addEventListener('click', onFilmCardClick);
function onFilmCardClick(e) {
  refs.modalBtn.addEventListener('click', onModalBtnClick);
  e.preventDefault();
  clearInfoModal();

  const URL_IMG = 'https://image.tmdb.org/t/p/w500';
  const li = e.target.closest('li');
  if (!li) return;
  const id = li.getAttribute('data-id');

  const film = movieClass.searchFilmByIdInLS(id);

  let genresList = null;

  if (film) {
    genresList = movieClass.makeAllMoodalGenresList(film.genre_ids, genres)
      ? movieClass.makeAllMoodalGenresList(film.genre_ids, genres)
      : 'No info';

    refs.searchForm.style.display = 'none';

    refs.modalBtnQueue.setAttribute('data-id', `${id}`);
    refs.modalBtnWatched.setAttribute('data-id', `${id}`);

    refs.imageModal.src = `${URL_IMG}${film.poster_path}`;
    refs.modalTitle.textContent = `${film.title ? film.title : film.name}`;
    refs.modalTitleOriginal.textContent = `${
      film.original_title ? film.original_title : film.original_name
    }`;
    refs.voteModal.textContent = `${film.vote_average.toFixed(2)}`;
    refs.votesModal.textContent = `${film.vote_count}`;
    refs.popularityModal.textContent = `${film.popularity}`;
    refs.genreModal.textContent = `${genresList}`;
    refs.overviewModal.textContent = `${film.overview}`;
    refs.backdrop.style.background = `url(${URL_IMG}${film.backdrop_path}) no-repeat center`;
    refs.backdrop.style.backgroundSize = 'cover';

    refs.backdrop.classList.remove('is-hidden');
    refs.body.classList.add('backdrop-body-block-scroll');

    checkStartBtn(
      id,
      refs.modalBtnWatched,
      refs.modalBtnWatched.getAttribute('data-actions')
    );
    checkStartBtn(
      id,
      refs.modalBtnQueue,
      refs.modalBtnQueue.getAttribute('data-actions')
    );

    checkStartBtn(
      id,
      refs.modalBtnWatched,
      refs.modalBtnWatched.getAttribute('data-actions')
    );
    checkStartBtn(
      id,
      refs.modalBtnQueue,
      refs.modalBtnQueue.getAttribute('data-actions')
    );
  }

  refs.btnCloseModalFilm.addEventListener('click', closeModal);
  window.addEventListener('keydown', onEscPress);
  function onEscPress(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }
  refs.backdrop.addEventListener('click', onCloseBackdropClick);
  refs.modalFilmBackBlure.addEventListener('click', onCloseBackdropClick);
  function onCloseBackdropClick(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }
  function closeModal() {
    refs.modalBtn.removeEventListener('click', onModalBtnClick);
    refs.searchForm.style.display = null;
    refs.backdrop.classList.add('is-hidden');
    refs.body.classList.remove('backdrop-body-block-scroll');
  }
  function clearInfoModal() {
    refs.imageModal.src = ``;
    refs.modalTitle.textContent = ``;
    refs.modalTitleOriginal.textContent = ``;
    refs.voteModal.textContent = ``;
    refs.votesModal.textContent = ``;
    refs.popularityModal.textContent = ``;
    refs.genreModal.textContent = ``;
    refs.overviewModal.textContent = ``;
  }

  function checkStartBtn(id, btn, actions) {
    if (btnModalClass.isFilmIncludesLSLibrary(id, actions)) {
      btn.textContent = `remove from ${actions}`;
    } else {
      btn.textContent = `add to ${actions}`;
    }
  }

  // console.log('film:', film);
}
