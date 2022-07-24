// Генерирует разметку популярных фильмов, первой страницы
// export default createStartPortfolio();
export { createStartPortfolio };

import { createMurkup } from './createGalleryMarkup';
import { refs } from '../refs';
import { movieClass } from './movieClass';
import { createGalleryStickers } from './cteateGalleryStickers';

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
  });
  await createGalleryStickers();
}
