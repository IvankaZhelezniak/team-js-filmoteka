import { refs } from '../refs';
import { createMarkup } from './createWatchedMarkup';
import { onFilmCardClick } from './modalFilm';

const parsedWatched = JSON.parse(refs.savedWatched);

refs.btnWatched.addEventListener('click', () => {
  refs.watchedListRef.classList.remove('visually-hidden');
  refs.queueListRef.classList.add('visually-hidden');
  refs.watchedListRef.classList.add('js-gallery__list');
  refs.queueListRef.classList.remove('js-gallery__list');
});

onWatchedBtn();

async function onWatchedBtn() {
  const savedWatched = await localStorage.getItem('watched');
  const parsedWatched = JSON.parse(savedWatched);

  // if (!parsedWatched || parsedWatched.length === 0) {
  //   return (refs.watchedListRef.innerHTML =
  //     "<p class = 'empty-queue-notify'>You don't have movies yet :(</p>");
  // }

  if (!refs.watchedListRef.classList.contains('actual')) {
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
