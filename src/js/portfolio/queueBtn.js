import { refs } from '../refs';
import { createMarkup } from './createWatchedMarkup';
import { onFilmCardClick } from './modalFilm';
import { movieClass } from './movieClass';
export {onQueueBtn} 



const currentPage = document.querySelector('.current');


if (currentPage.textContent === 'My library') {
  refs.btnQueue.addEventListener('click', () => {
    refs.watchedListRef.classList.add('visually-hidden');
    refs.queueListRef.classList.remove('visually-hidden');   
    refs.watchedListRef.classList.remove('js-gallery__list');
    refs.queueListRef.classList.add('js-gallery__list');
    onQueueBtn('queue');
  });
}



async function onQueueBtn(actions) { 
          const currentPage = document.querySelector('.current');
  if (currentPage.textContent === 'Home') {
    return;
  }
    
     if (!refs.queueListRef.classList.contains('actual')) {
    const parsedQueue = await movieClass.getFromLS('queue');

      refs.queueListRef.innerHTML = '';

    if (!parsedQueue || parsedQueue.length === 0) {
        return (refs.queueListRef.innerHTML =
          "<p class = 'empty-queue-notify'>You don't have movies yet in queue list :(</p>");
    }

      refs.queueListRef.insertAdjacentHTML(
        'beforeend',
        parsedQueue
          .map(item => {
            return createMarkup(item);
          })
          .join('')
      );
  } else {
    return;
  }

}


