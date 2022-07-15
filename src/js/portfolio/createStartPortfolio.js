import { fetchPopularMovies } from './fetchPopularMovies';
import { createMurkup } from './createGalleryMarkup';
import {refs} from '../refs'

// Генерирует разметку популярных фильмов, первой страницы
export default createStartPortfolio();

function createStartPortfolio() {
	return fetchPopularMovies().then(films => {
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

