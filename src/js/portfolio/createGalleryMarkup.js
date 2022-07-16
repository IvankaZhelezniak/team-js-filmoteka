import { parsedGenres } from './saveGenres';
export { createMurkup };

function createMurkup({
  backdrop_path,
  original_title,
  original_name,
  genre_ids,
  release_date,
  first_air_date,
}) {
  // проверка дает ли бэк original_title (дает не всегда), если нет заменяем его на original_name (костыль)
  if (!original_title) {
    original_title = original_name;
  }

  return `<a href="" class="movie-link"><img src=https://image.tmdb.org/t/p/w500${backdrop_path} width="280" height="400" alt="">
		<h3 class="movie-title">${original_title}</h3>
		<p class="movie-genres">${Object.values(
      makeGenresArrayMarkup({ genre_ids })
    ).join(', ')} | ${makeReleaseDate({ release_date, first_air_date })}</p>
	  </a>`;
}

// Получает id возвращает массив с названиями жанров
function makeGenresArrayMarkup({ genre_ids }) {
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
