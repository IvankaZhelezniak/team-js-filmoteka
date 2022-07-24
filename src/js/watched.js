import { createMurkup } from './createGalleryMarkup';
import { refs } from '../refs';
import { movieClass } from './movieClass';
import { movieClass } from '../portfolio/movieClass';

const watchedStoragedFilms = JSON.parse(localStorage.getItem('watched-films')) || [];

function isFilmIncludesWatched(id) {
  const filmsArray = movieClass.getFromLS('watched');
  if (filmsArray === null) {
    return false;
  }

  return filmsArray.find(film => {
    if (film.id == id) {
      return true;
    }
  });
}

  function addFilmToWatched(id) {

    if (localStorage.getItem('watched-films').includes(id)) {
      watchedStoragedFilms.splice(watchedStoragedFilms.indexOf(id), 1);
  } else {
      watchedStoragedFilms.push(id);
  }
  localStorage.setItem('watched-films', JSON.stringify(watchedStoragedFilms));
  }

  console.log(isFilmIncludesWatched);
  console.log(addFilmToWatched);