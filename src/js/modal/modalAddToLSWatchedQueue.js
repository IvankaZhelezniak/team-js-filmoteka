import { refs } from '../refs';
import { movieClass } from '../portfolio/movieClass';
import { btnModalClass } from './btnModalClass';
import {createFilmStickers, removeFilmStickers} from '../portfolio/cteateGalleryStickers';
import { onWatchedBtn } from '../portfolio/watchedBtn';
import {onQueueBtn} from '../portfolio/queueBtn';
export {onModalBtnClick};

  
  
function onModalBtnClick(evt) {
  evt.preventDefault();
  // console.log('onWatchedBtn', onWatchedBtn);
  
  const liBtn = evt.target.closest('li');
  if (!liBtn) return;

  const id = liBtn.getAttribute('data-id');
  const actions = liBtn.getAttribute('data-actions');
  const film = movieClass.searchFilmByIdInLS(id);
  // console.log('film:', film,  'actions:', actions, 'id:', id, 'liBtn', liBtn);

  const currentPage = document.querySelector('.current');
  // console.log('currentPage.textContent', currentPage.textContent);

  
  // Проверка - сохранен ли фильм, внесение или удаление с локал сторидж 
  if (btnModalClass.isFilmIncludesLSLibrary(id, actions)) {
    // console.log('удаляю из хранилища', );
    
    removeFilmStickers(film, actions);
    movieClass.removeFromLibraryMovieInLS(film, actions);
  } else {
    // console.log('добавляю в хранилище', );
    
    createFilmStickers(film, actions);
    movieClass.saveToLibraryMovieInLS(film, actions);

    
  }


  if (currentPage.textContent == 'My library' && actions == 'watched') {
  onWatchedBtn(actions);
} else if (currentPage.textContent == 'My library' && actions == 'queue') {
    onQueueBtn(actions);
  }

  
  movieClass.changeModalBtnName(liBtn, id, actions);
}
