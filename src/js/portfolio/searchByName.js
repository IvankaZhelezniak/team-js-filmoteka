import { refs } from '../refs';
import { createMurkup } from './createGalleryMarkup';
import { movieClass } from './movieClass';

refs.searchError.style.visibility = "hidden";

if(refs?.searchForm) {
  refs.searchForm.addEventListener("submit", handleSubmit);
}
let page = 1;

function handleSubmit(event) {
  event.preventDefault();
  const searchQuery = refs.searchForm.search.value.trim();

  if (searchQuery !== '') {
    createSearchedPortfolio(searchQuery);
    refs.searchForm.reset();
    }
  return searchQuery;
}

// async function fetchSearchedMovies(searchQuery) {
//   try {
//     page = 1;
//     const response = await fetch(
//       `https://api.themoviedb.org/3/search/movie?api_key=5692dca6012d3660a336300872bd664c&language=en-US&page=${page}&include_adult=false&query=${searchQuery}`
//     );
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }

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

