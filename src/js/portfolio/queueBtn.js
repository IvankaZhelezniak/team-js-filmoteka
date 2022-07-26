import { refs } from '../refs';
import { createMarkup } from './createWatchedMarkup';
import { onFilmCardClick } from './modalFilm';


// const parsedQueue = JSON.parse(refs.savedQueue);   

const currentPage = document.querySelector('.current');

// refs.btnQueue.addEventListener('click', onQueueBtn);


if (currentPage.textContent === 'My library') {
  refs.btnQueue.addEventListener('click', () => {
    refs.watchedListRef.classList.add('visually-hidden');
    refs.queueListRef.classList.remove('visually-hidden');   
    refs.watchedListRef.classList.remove('js-gallery__list');
    refs.queueListRef.classList.add('js-gallery__list');
  });
}

onQueueBtn();
async function onQueueBtn() { 
          const currentPage = document.querySelector('.current');
  if (currentPage.textContent === 'Home') {
    return;
  }
    
    if (!refs.queueListRef.classList.contains('actual')) {
              const savedQueue = await localStorage.getItem('queue');
        const parsedQueue = JSON.parse(savedQueue);
        refs.queueListRef.innerHTML = '';

           if (!parsedQueue || parsedQueue.length === 0) {
      return (refs.queueListRef.innerHTML =
        "<p class = 'empty-queue-notify'>You don't have movies yet :(</p>");
        }
        refs.queueListRef.insertAdjacentHTML(
            'beforeend',
            parsedQueue
                .map(item => {
                    return createMarkup(item);
                }).join(''));

    } else {
        return;
    }

}







// function onQueueBtn () {
//     refs.watchedListRef.classList.add('visually-hidden');
//     refs.queueListRef.classList.remove('visually-hidden');
// }

// refs.queueListRef.insertAdjacentHTML(
//     'beforeend',
//     parsedQueue
//     .map(item => {
//         return createMarkup(item);
//     }).join(''))
