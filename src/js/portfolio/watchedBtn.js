import { refs } from '../refs';
import { createMarkup } from './createWatchedMarkup';
import { onFilmCardClick } from './modalFilm';
import { movieClass } from './movieClass';
export { onWatchedBtn };

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
  // ==============был конфликт===============
  if (!refs.watchedListRef.classList.contains('actual')) {
    const parsedWatched = movieClass.getFromLS('watched');
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
