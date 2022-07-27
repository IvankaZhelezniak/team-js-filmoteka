import { refs } from '../refs';
import { createMarkup } from './createWatchedMarkup';
import { onFilmCardClick } from './modalFilm';
import { movieClass } from './movieClass';
export { onWatchedBtn };

const currentPage = document.querySelector('.current');

if (currentPage.textContent === 'My library') {
  refs.btnWatched.addEventListener('click', () => {
    refs.watchedListRef.classList.remove('visually-hidden');
    refs.queueListRef.classList.add('visually-hidden');
    refs.watchedListRef.classList.add('js-gallery__list');
    refs.queueListRef.classList.remove('js-gallery__list');
    refs.queueListRef.classList.remove('js-gallery__list');
    refs.btnQueue.classList.remove('is-active');
    refs.btnWatched.classList.add('is-active');
  });
}

onWatchedBtn('watched');
async function onWatchedBtn(actions) {
  const currentPage = document.querySelector('.current');
  if (currentPage.textContent === 'Home') {
    return;
  }

  if (!refs.watchedListRef.classList.contains('actual')) {
    const parsedWatched = await movieClass.getFromLS('watched');

    const parsedQueue = movieClass.getFromLS('queue');
    if (actions == 'watched') {
      refs.watchedListRef.innerHTML = '';
    }

    if (actions == 'queue') {
      refs.queueListRef.innerHTML = '';
    }

    if (!parsedWatched || parsedWatched.length === 0) {
      if (actions == 'watched') {
        return (refs.watchedListRef.innerHTML =
          "<li class = 'empty-queue-notify'><p>You don't have added movies to your library yet :(</p></li>");
      }
    }

    if (!parsedQueue || parsedQueue.length === 0) {
      if (actions == 'queue') {
        return (refs.queueListRef.innerHTML =
          "<p class = 'empty-queue-notify'>You don't have movies yet :(</p>");
      }
    }

    
    if (actions == 'watched') {
      refs.watchedListRef.insertAdjacentHTML(
        'beforeend',
        parsedWatched
          .map(item => {
            return createMarkup(item);
          })
          .join('')
      );
    }

    if (actions == 'queue') {
      refs.queueListRef.insertAdjacentHTML(
        'beforeend',
        parsedWatched
          .map(item => {
            return createMarkup(item);
          })
          .join('')
      );
    }

  } else {
    return;
  }
}

