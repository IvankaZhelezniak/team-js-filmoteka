import { refs } from '../refs';
import {movieClass} from '../portfolio/movieClass';


refs.modalBtn.addEventListener('click', onModalBtnClick);

function onModalBtnClick(evt) {
  evt.preventDefault();

  const li = evt.target.closest('li');
  const id = li.getAttribute('data-id');
  const actions = li.getAttribute('data-actions');

  if (!li) return;

  const film = movieClass.searchFilmByIdInLS(id);

  // console.log('film', film,  'actions', actions);
  movieClass.saveToLibraryMovieInLS(film, actions);



}
