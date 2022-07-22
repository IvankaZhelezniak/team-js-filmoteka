// Генерирует разметку популярных фильмов, первой страницы
export default createStartPortfolio();

import { createMurkup } from './createGalleryMarkup';
import { refs } from '../refs';
import { movieClass } from './movieClass';

async function createStartPortfolio() {
  var searchQuery = '';
  var type = 'trending/all/day';
  var page = '1';
  var lang = 'en-US';
  return await movieClass.fetchMovies(type, page, lang, searchQuery).then(films => {
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
