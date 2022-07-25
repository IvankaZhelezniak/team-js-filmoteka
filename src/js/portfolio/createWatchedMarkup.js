import { movieClass } from './movieClass';
import genres from './genres';

export { createMarkup };

function createMarkup({
  original_title,
  original_name,
  id,
  genre_ids,
  release_date,
  first_air_date,
  poster_path,
  vote_average,
}) {
  
    
  if (!original_title) {
    original_title = original_name;
  }

  const genreName = movieClass.makeGenresList(genre_ids, genres)
    ? movieClass.makeGenresList(genre_ids, genres)
    : 'No info'
  
  const year = movieClass.modifyDate(release_date, first_air_date)
    ? movieClass.modifyDate(release_date, first_air_date)
    : 'No info'

  return `<li class="gallery_card__item" data-id=${id}>
  <a href="./" class="gallery_card__link">
      <div class="gallery_thumb">
          <img src=https://image.tmdb.org/t/p/w500${poster_path} alt="movie cover" loading='lazy' class="gallery_card__img">
      </div>
      <div class="gallery_info">
          <h3 class="gallery_info__name">${original_title}</h3>
          <div class = "gallery_info__about">
              <p class = "gallery_info__genres">${genreName}</p>
              <p class = "gallery_info__separator">|</p>
              <p class = "gallery_info__year">${year}</p>
              <span class = "gallery_info__rate">${vote_average.toFixed(2)}</span>
          </div>
      </div>
  </a>
</li>`;
}
