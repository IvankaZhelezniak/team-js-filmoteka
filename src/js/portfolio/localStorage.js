export {
  parsedGenres,
  parsedFindedFilmsFromLS,
  saveToLocalStorageFindedFilms,
};

const parsedGenres = parseGenres();
const parsedFindedFilmsFromLS = parseFindedFilms();

// Посылает запрос за id всех жанров
function fetchGenresList() {
  return fetch(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=5692dca6012d3660a336300872bd664c&language=en-US'
  ).then(response => {
    return response.json();
  });
}

// Сохраняет id всех жанров в локал сторидж
function saveGenres() {
  return fetchGenresList().then(genresArray => {
    const newGenresObj = {};

    genresArray.genres.map(genre => {
      newGenresObj[genre.id] = genre.name;
      return newGenresObj;
    });

    return localStorage.setItem('genres', JSON.stringify(newGenresObj));
  });
}

// !!!!! куда пристроить saveGenres(); ??
// Парсит жанры из локал сторидж
function parseGenres() {
  saveGenres();
  const value = localStorage.getItem('genres');
  const parseGanres = JSON.parse(value);
  return parseGanres;
}

// =====================================Find Films

function saveToLocalStorageFindedFilms(films) {
  localStorage.setItem('findFilms', JSON.stringify(films.results));
}

function parseFindedFilms() {
  const value = localStorage.getItem('findFilms');
  const parsedFindedFilmsFromLS = JSON.parse(value);
  return parsedFindedFilmsFromLS;
}
