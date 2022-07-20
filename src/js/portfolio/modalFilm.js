import { refs } from '../refs';
import { movieClass } from './movieClass';
// import { genres } from './genres';
import genres from './genres';

console.log('genresModal', genres);
refs.gallery.addEventListener('click', onFilmCardClick);

function onFilmCardClick(e) {
  e.preventDefault();
  clearInfoModal();

  const li = e.target.closest('li');
  if (!li) return;
  const id = li.getAttribute('data-id');

  const film = movieClass.searchFilmByIdInLS(id);
  const genresList = movieClass.makeAllMoodalGenresList(film.genre_ids, genres);
  console.log('film:', film);

  refs.searchFormContainer.style.display = 'none';

  const URL_IMG = 'https://image.tmdb.org/t/p/w500';
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
}

refs.btnCloseModalFilm.addEventListener('click', closeModal);

window.addEventListener('keydown', onEscPress);
function onEscPress(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

refs.backdrop.addEventListener('click', onCloseBackdropClick);
function onCloseBackdropClick(e) {
  if (e.target === e.currentTarget) {
    closeModal();
  }
}

function closeModal() {
  refs.searchFormContainer.style.display = null;
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
