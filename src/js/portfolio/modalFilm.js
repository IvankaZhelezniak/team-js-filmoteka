import { refs } from '../refs';
import { movieClass } from './movieClass';

refs.gallery.addEventListener('click', onFilmCardClick);

function onFilmCardClick(e) {
  e.preventDefault();
  const li = e.target.closest('li');

  if (!li) return;
  const id = li.getAttribute('data-id');

  const film = movieClass.searchFilmByIdInLS(id);
  console.log('film:', film);

  refs.backdrop.classList.remove('is-hidden');
  refs.body.classList.add('backdrop-body-block-scroll');
}

refs.btnCloseModalFilm.addEventListener('click', onCloseModalClick);

function onCloseModalClick(e) {
  refs.backdrop.classList.add('is-hidden');
  refs.body.classList.remove('backdrop-body-block-scroll');
}
