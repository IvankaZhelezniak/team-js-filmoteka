// Генерирует разметку популярных фильмов, первой страницы
export default createStartPortfolio();

import { createMurkup } from './createGalleryMarkup';
import { refs } from '../refs';
import { movieClass } from './movieClass';

async function createStartPortfolio() {
  return await movieClass.fetchPopularMovies().then(films => {
    movieClass.saveToLocalStorageFindedFilms(films);

    return refs.gallery.insertAdjacentHTML(
      'beforeend',
      films.results
        .map(film => {
          return createMurkup(film);
        })
        .join('')
    );
  });
}
