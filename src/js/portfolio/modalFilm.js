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
  // console.log('film:', film);
  console.log('genres modal', genres);
  
  console.log('film.genre_ids', film.genre_ids);
  

  const URL_IMG = 'https://image.tmdb.org/t/p/original';
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

  refs.backdrop.classList.remove('is-hidden');
  refs.body.classList.add('backdrop-body-block-scroll');
}

refs.btnCloseModalFilm.addEventListener('click', onCloseModalClick);
function onCloseModalClick(e) {
  refs.backdrop.classList.add('is-hidden');
  refs.body.classList.remove('backdrop-body-block-scroll');
}

window.addEventListener('keydown', onEscPress);
function onEscPress(e) {
  if (e.key === 'Escape') {
    refs.backdrop.classList.add('is-hidden');
    refs.body.classList.remove('backdrop-body-block-scroll');
  }
}

refs.backdrop.addEventListener('click', onCloseBackdropClick);

function onCloseBackdropClick(e) {
  if (e.target === e.currentTarget) {
    refs.backdrop.classList.add('is-hidden');
    refs.body.classList.remove('backdrop-body-block-scroll');
  }
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
