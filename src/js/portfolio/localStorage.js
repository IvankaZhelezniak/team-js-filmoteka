export {
  parsedFindedFilmsFromLS,
  parseFindedFilms,
  saveToLocalStorageFindedFilms,
  parseGenres,
};

const parsedGenres = parseGenres();
const parsedFindedFilmsFromLS = parseFindedFilms();

// Посылает запрос за id всех жанров
async function fetchGenresList() {
  const genres = await fetch(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=5692dca6012d3660a336300872bd664c&language=en-US'
  );
  return await genres.json();
}

// Сохраняет id всех жанров в локал сторидж
async function saveGenres() {
  try {
    return await fetchGenresList().then(genresArray => {
      const newGenresObj = {};
      changeGenresToBeUsable(genresArray, newGenresObj);

      return localStorage.setItem('genres', JSON.stringify(newGenresObj));
    });
  } catch (error) {
    console.log(error);
  }
}

// Возвращает объект с жанрами в виде ключ-значение
function changeGenresToBeUsable(genresArray, newGenresObj) {
  genresArray.genres.map(genre => {
    newGenresObj[genre.id] = genre.name;
    return newGenresObj;
  });
}

// !!!!! куда пристроить saveGenres(); ??
// Парсит жанры из локал сторидж
function parseGenres() {
  saveGenres();
  const value = localStorage.getItem('genres');
  let parseGanres = {};
  try {
    parseGanres = JSON.parse(value);
  } catch (error) {
    console.log(error);
    if (error.name === 'SyntaxError') {
      console.log('Ошибка парса JSON');
    }
  }
  return parseGanres;
}

// =====================================Find Films

function saveToLocalStorageFindedFilms(films) {
  localStorage.setItem('findFilms', JSON.stringify(films.results));
}

function parseFindedFilms() {
  const value = localStorage.getItem('findFilms');
  let parsedFindedFilmsFromLS = [];
  try {
    parsedFindedFilmsFromLS = JSON.parse(value);
  } catch (error) {
    if (error.name === 'SyntaxError') {
      console.log('Ошибка парса JSON');
    }
  }
  return parsedFindedFilmsFromLS;
}
