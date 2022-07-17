import { parseGenres} from './localStorage';
export { createMurkup };

function createMurkup({
  backdrop_path,
  original_title,
  original_name,
  id,
  genre_ids,
  release_date,
  first_air_date,
}) {
  // проверка дает ли бэк original_title (дает не всегда), если нет заменяем его на original_name (костыль)
  if (!original_title) {
    original_title = original_name;
  }

  return `<li class="gallery_card__item" data-id=${id}>
  <a href="./" class="gallery_card__link">
      <div class="gallery_thumb">
          <img src=https://image.tmdb.org/t/p/w500${backdrop_path} alt="movie cover" loading='lazy' class="gallery_card__img">
      </div>
      <div class="gallery_info">
          <h3 class="gallery_info__name">${original_title}</h3>
          <div class = "gallery_info__about">
              <p class = "gallery_info__genres">${makeGenresArrayMarkup(genre_ids )}</p>
              <p class = "gallery_info__separator">|</p>
              <p class = "gallery_info__year">${makeReleaseDate({
                release_date,
                first_air_date,
              })}</p>
          </div>
      </div>
  </a>
</li>`;
}

// Получает id возвращает массив с названиями жанров
function makeGenresArrayMarkup(genre_ids) {
  const parsedGenres = parseGenres();
  const genresArray = [];

  for (id of genre_ids) {
    // если название пустое -- пропускаем
    if (parsedGenres[id] === null || parsedGenres[id] === undefined) {
      continue;
    }

    // если массив 2+ жанров -- пишем 'Other'
    if (genresArray.length === 2) {
      genresArray.push('Other');
      break;
    }
    genresArray.push(parsedGenres[id]);
  }
  return genresArray;
}

function makeReleaseDate({ release_date, first_air_date }) {
  // в некоторых нет даты релиза, используют дату первого полета
  if (release_date) {
    return release_date.slice(0, 4);
  } else if (first_air_date) {
    return first_air_date.slice(0, 4);
  }
  return '';
}
