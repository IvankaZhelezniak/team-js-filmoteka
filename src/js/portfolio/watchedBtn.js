import { refs } from '../refs';
import { createMarkup } from './createWatchedMarkup';
import { onFilmCardClick } from './modalFilm';

const parsedWatched = JSON.parse(refs.savedWatched);

refs.btnWatched.addEventListener('click', () => {
  refs.watchedListRef.classList.remove('visually-hidden');
  refs.queueListRef.classList.add('visually-hidden');
});

onWatchedBtn();
function onWatchedBtn() {
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
