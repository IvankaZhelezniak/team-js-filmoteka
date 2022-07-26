import { refs } from '../refs';
import { createMurkup } from './createGalleryMarkup';
import { movieClass } from './movieClass';

refs.searchError.style.visibility = "hidden";

if(refs?.searchForm) {
  refs.searchForm.addEventListener("submit", handleSubmit);
}
//let page = 1;

function handleSubmit(event) {
  event.preventDefault();
  const searchQuery = refs.searchForm.search.value.trim();
  movieClass.searchQuery = refs.searchForm.search.value.trim();
  movieClass.page = 0;

  if (searchQuery !== '') {
    createSearchedPortfolio(movieClass.searchQuery);
    refs.searchForm.reset();
    }
  return searchQuery;
}

async function createSearchedPortfolio(searchQuery) {
    return await movieClass.fetchSearchedMovies(searchQuery).then(films => {
    if(films.total_results !== 0) {
      movieClass.saveToLocalStorageFindedFilms(films);  
        refs.gallery.innerHTML = "";  
        return refs.gallery.insertAdjacentHTML(
        'beforeend',
        films.results
          .map(film => {
            return createMurkup(film);
          })
          .join('')
      );
    }
    refs.searchError.style.visibility = 'visible';
    setTimeout(onSearchError, 2000);
  });
}

const onSearchError = () => {
  refs.searchError.style.visibility = 'hidden';
};

