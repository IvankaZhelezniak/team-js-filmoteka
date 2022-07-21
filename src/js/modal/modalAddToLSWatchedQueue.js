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

  // Проверка - сохранен ли фильм, внесение или удаление с локал сторидж 
  if (btnModalClass.isFilmIncludesLSLibrary(id, actions)) {
    // console.log('удаляю из хранилища', );
    
    movieClass.removeFromLibraryMovieInLS(film, actions);
  } else {
    // console.log('добавляю в хранилище', );
    
    movieClass.saveToLibraryMovieInLS(film, actions);
  }

  // console.log('изменяю название кнопки', );
  
  movieClass.changeModalBtnName(liBtn, id, actions);
}
