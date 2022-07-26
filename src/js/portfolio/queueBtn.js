import { refs } from '../refs';
import { createMarkup } from './createWatchedMarkup';
import { onFilmCardClick } from './modalFilm';

   
const parsedQueue = JSON.parse(refs.savedQueue);

refs.btnQueue.addEventListener('click', onQueueBtn);

function onQueueBtn () {
    refs.watchedListRef.classList.add('visually-hidden');
    refs.queueListRef.classList.remove('visually-hidden');   
}

refs.queueListRef.insertAdjacentHTML(
    'beforeend',
    parsedQueue
    .map(item => {
        return createMarkup(item);
    }).join(''))
