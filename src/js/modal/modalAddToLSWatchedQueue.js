import { refs } from '../refs';
import { movieClass } from '../portfolio/movieClass';
import { btnModalClass } from './btnModalClass';

refs.modalBtn.addEventListener('click', onModalBtnClick);

function onModalBtnClick(evt) {
  evt.preventDefault();

  const liBtn = evt.target.closest('li');
  if (!liBtn) return;

  const id = liBtn.getAttribute('data-id');
  const actions = liBtn.getAttribute('data-actions');
  const film = movieClass.searchFilmByIdInLS(id);
  // console.log('film:', film,  'actions:', actions, 'id:', id, 'liBtn', liBtn);

  if (btnModalClass.isFilmIncludesLSLibrary(id, actions)) {
    movieClass.removeFromLibraryMovieInLS(film, actions);
  } else {
    movieClass.saveToLibraryMovieInLS(film, actions);
  }

  // if (  btnModalClass.isFilmIncludesLSQueue(id)) {movieClass.removeFromLibraryMovie(film, actions)} else{
  //   movieClass.saveToLibraryMovieInLS(film, actions);
  // }
}
