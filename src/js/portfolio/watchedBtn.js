import { refs } from '../refs';
import { createMarkup } from './createWatchedMarkup';
import { onFilmCardClick } from './modalFilm';
import { movieClass } from './movieClass';
export {onWatchedBtn}


const currentPage = document.querySelector('.current');
// console.log('currentPage.textContent', currentPage.textContent);

  if (currentPage.textContent == 'My library') {
    refs.btnWatched.addEventListener('click', () => {
      refs.watchedListRef.classList.remove('visually-hidden');
      refs.queueListRef.classList.add('visually-hidden');
    });
  }


onWatchedBtn();
function onWatchedBtn() {
  // console.log('onWatchedBtn', );
  
  const currentPage = document.querySelector('.current');
  if (currentPage.textContent == 'Home') {
    // console.log('Home page? return', );
    return
  }
  
  if (!refs.watchedListRef.classList.contains('actual')) {
    const parsedWatched = movieClass.getFromLS('watched')
    refs.watchedListRef.innerHTML ='';
    // console.log('parsedWatched', parsedWatched);
    
    refs.btnEmptyLibraryBox.classList.add('empty-off');
    refs.watchedListRef.insertAdjacentHTML(
      'beforeend',
      parsedWatched
        .map(item => {
          return createMarkup(item);
        })
        .join('')
    );
  } else {
    return;
  }
}
