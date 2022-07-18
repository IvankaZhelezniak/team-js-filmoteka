import { refs } from '../refs';
import {movieClass} from '../portfolio/movieClass';


refs.modalBtn.addEventListener('click', onModalBtnClick);

function onModalBtnClick(evt) {
  evt.preventDefault();

  const li = evt.target.closest('li');
  if (!li) return;

  const id = li.getAttribute('data-id');
  const actions = li.getAttribute('data-actions');

  const film = movieClass.searchFilmByIdInLS(id);
  // console.log('film', film,  'actions', actions, 'id', id);

  if ( movieClass.isModalFilmIncludesLS(id, actions)) {

  }
  movieClass.saveToLibraryMovieInLS(film, actions);

}
