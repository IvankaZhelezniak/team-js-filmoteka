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
  });
}

onWatchedBtn();
async function onWatchedBtn() {
  const currentPage = document.querySelector('.current');
  if (currentPage.textContent === 'Home') {
    return;
  }

  // =============был конфликт===================

  // async function onWatchedBtn() {
  //   const savedWatched = await localStorage.getItem('watched');
  //   const parsedWatched = JSON.parse(savedWatched);

  // if (!parsedWatched || parsedWatched.length === 0) {
  //   return (refs.watchedListRef.innerHTML =
  //     "<p class = 'empty-queue-notify'>You don't have movies yet :(</p>");
  // }


  if (!refs.watchedListRef.classList.contains('actual')) {
    const parsedWatched = await movieClass.getFromLS('watched');
    refs.watchedListRef.innerHTML = '';

    if (!parsedWatched || parsedWatched.length === 0) {
      return (refs.watchedListRef.innerHTML =
        "<p class = 'empty-queue-notify'>You don't have movies yet :(</p>");
    }
    // console.log('parsedWatched', parsedWatched);

    // refs.btnEmptyLibraryBox.classList.add('empty-off');
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
