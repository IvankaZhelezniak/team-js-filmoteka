// Генерирует разметку популярных фильмов, первой страницы
// export default createStartPortfolio();
export { createStartPortfolio, loadMoreCards };

import { createMurkup } from './createGalleryMarkup';
import { refs } from '../refs';
import { movieClass } from './movieClass';
import { createGalleryStickers } from './cteateGalleryStickers';
import {observer} from './infinite-scroll-trending';
createStartPortfolio();
async function createStartPortfolio() {
   await movieClass.fetchPopularMovies().then(films => {
    movieClass.saveToLocalStorageFindedFilms(films);

     refs.gallery.insertAdjacentHTML(
      'beforeend',
      films.results
        .map(film => {
          return createMurkup(film);
        })
        .join('')
    ); 

    refs.gallery.insertAdjacentHTML(
      'afterend', `
      <div class="scroll-guard"></div>`); 

  });
  await createGalleryStickers();
  await observer.observe(document.querySelector('.scroll-guard'));
}


async function loadMoreCards(films) {
  await movieClass.fetchPopularMovies().then(films => {
   movieClass.addToLocalStorageFindedFilms(films);

    refs.gallery.insertAdjacentHTML(
     'beforeend',
     films.results
       .map(film => {
         return createMurkup(film);
       })
       .join('')
   ); 
 });
}
