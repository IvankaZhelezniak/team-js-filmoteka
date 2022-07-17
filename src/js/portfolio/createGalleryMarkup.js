import { movieClass } from './movieClass';
import genres from './genres';

export { createMurkup };

function createMurkup({
  original_title,
  original_name,
  id,
  genre_ids,
  release_date,
  first_air_date,
  poster_path,
}) {
  // проверка дает ли бэк original_title
  if (!original_title) {
    original_title = original_name;
  }

  return `<li class="gallery_card__item" data-id=${id}>
  <a href="./" class="gallery_card__link">
      <div class="gallery_thumb">
          <img src=https://image.tmdb.org/t/p/w500${poster_path} alt="movie cover" loading='lazy' class="gallery_card__img">
      </div>
      <div class="gallery_info">
          <h3 class="gallery_info__name">${original_title}</h3>
          <div class = "gallery_info__about">
              <p class = "gallery_info__genres">${movieClass.makeGenresList(genre_ids, genres)}</p>
              <p class = "gallery_info__separator">|</p>
              <p class = "gallery_info__year">${movieClass.modifyDate(
                release_date,
                first_air_date
              )}</p>
          </div>
      </div>
  </a>
</li>`;
}