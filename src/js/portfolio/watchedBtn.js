// import { refs } from '../refs';
// import { createMarkup } from './createWatchedMarkup';
// import { onFilmCardClick } from './modalFilm'
// console.log('we work', );

// refs.btnWatched.addEventListener('click', onWatchedBtn);
// refs.watchedListRef.addEventListener('click', onFilmCardClick);

// async function onWatchedBtn () {
//     const savedWatched = await localStorage.getItem("watched");
//     const parsedWatched = JSON.parse(savedWatched);

//     if (!parsedWatched || parsedWatched.length === 0) {
//         refs.watchedListRef.innerHTML =
//          "<p class = 'empty-queue-notify'>You don't have movies yet :(</p>";
//     }

//     if (!refs.watchedListRef.classList.contains('actual')) {
//         refs.watchedListRef.classList.add('actual')
//         refs.watchedListRef.insertAdjacentHTML(
//         'beforeend',
//         parsedWatched
//         .map(item => {
//             return createMarkup(item);
//         }).join('')
//         );
//     }
//     else {
//         return
//     }
// }
// console.log('we work', );
