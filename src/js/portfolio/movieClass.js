import { btnModalClass } from '../modal/btnModalClass';
export { movieClass };

// ================================class Movie======================================
let page = 1;
const movieClass = new (class Movie {
  constructor() {
    this.storageWatched = [];
    this.storageQueue = [];
  }

  async fetchPopularMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=5692dca6012d3660a336300872bd664c&page=${page}`
    );
    page += 1;
    return await response.json();
  }

  async fetchSearchedMovies(searchQuery) {
    try {
      this.page += 1;
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=5692dca6012d3660a336300872bd664c&language=en-US&page=${this.page}&include_adult=false&query=${searchQuery}`
      );
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  saveToLocalStorageFindedFilms(films) {
    localStorage.setItem('findFilms', JSON.stringify(films.results));
  }

  addToLocalStorageFindedFilms(films) {
    const filmArray = this.getFromLS(`findFilms`);

    films.results.map(film => {filmArray.push(film)});

    localStorage.setItem(`findFilms`, JSON.stringify(filmArray));

  }




  saveToLibraryMovieInLS(film, actions) {
    // console.log(`фильм сохранен в LS ${actions}`);
    let filmArray = this.getFromLS(`${actions}`);
    if (!filmArray) {
      filmArray = [];
    }

    filmArray.push(film);
    // console.log('actions, filmArray', actions, filmArray);
    localStorage.setItem(`${actions}`, JSON.stringify(filmArray));
  }

  removeFromLibraryMovieInLS(filmToRemove, actions) {
    // console.log(`фильм удален из LS ${actions}`);

    let filmArray = this.getFromLS(`${actions}`);
    const removeIndex = filmArray.findIndex(film => film.id == filmToRemove.id);

    filmArray.splice(removeIndex, 1);

    localStorage.setItem(`${actions}`, JSON.stringify(filmArray));
  }

  changeModalBtnName(li, id, actions) {
    // console.log('work', );

    if (btnModalClass.isFilmIncludesLSLibrary(id, actions)) {
      return (li.textContent = `remove from ${actions}`);
    }
    return (li.textContent = `add to ${actions}`);
  }

  getFromLS(key) {
    const value = localStorage.getItem(`${key}`);

    try {
      // console.log('JSON.parse(value)', JSON.parse(value));
      return JSON.parse(value);
    } catch (error) {
      if (error.name === 'SyntaxError') {
        console.log('Ошибка парса JSON');
      }
    }
  }

  isModalFilmIncludesLS(id, actions) {
    const filmsArray = movieClass.getFromLS(actions);
    if (filmsArray === null) {
      // return console.log('фильма нет в локал сторидж', );
    }

    return filmsArray.find(film => {
      if (film.id == id) {
        // return console.log('фильм уже есть в локал сторидж', );
      }
    });
  }

  modifyDate(release_date, first_air_date) {
    // в некоторых нет даты релиза, используют дату первого полета
    if (release_date) {
      return release_date.slice(0, 4);
    } else if (first_air_date) {
      return first_air_date.slice(0, 4);
    }
    return '';
  }

  modifyGenres(genre_ids) {
    const genresArray = [];
    for (let id of genre_ids) {
      // если название пустое -- пропускаем
      if (allGenres[id] === null || allGenres[id] === undefined) {
        continue;
      }

      // если массив 2+ жанров -- пишем 'Other'
      if (genresArray.length === 2) {
        genresArray.push('Other');
        break;
      }
      genresArray.push(allGenres[id]);
    }
    return Object.values(genresArray).join(', ');
  }

  makeGenresList(genres_id, genres) {
    const genresArray = [];

    for (let id of genres_id) {
      const index = genres.findIndex(genre => genre.id == id);

      if (genres[index] === null || genres[index] === undefined) {
        continue;
      }

      // если массив 2+ жанров -- пишем 'Other'
      if (genresArray.length === 2) {
        genresArray.push('Other');
        break;
      }
      genresArray.push(genres[index].name);
    }
    return Object.values(genresArray).join(', ');
  }

  makeAllMoodalGenresList(genre_ids, genres) {
    const genresArray = [];
    for (let id of genre_ids) {
      const index = genres.findIndex(genre => genre.id == id);
      if (genres[index] === null || genres[index] === undefined) {
        continue;
      }
      genresArray.push(genres[index].name);
    }
    return Object.values(genresArray).join(', ');
  }

  parseFindedFilms() {
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

  searchFilmByIdInLS(id) {
    const parsedFindedFilmsFromLS = movieClass.parseFindedFilms();
    return parsedFindedFilmsFromLS.find(film => {
      if (film.id === Number(id)) {
        return film;
      }
    });
  }
})();

// ============================Genres (not use)=====================
class Genres {
  constructor() {}
  // Возвращает объект с жанрами в виде ключ-значение
  changeGenresToBeUsable(genresArray, newGenresObj = {}) {
    genresArray.genres.map(genre => {
      newGenresObj[genre.id] = genre.name;
      return newGenresObj;
    });
  }

  // Парсит жанры из локал сторидж
  async parseGenres() {
    await this.saveGenres();
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

  // Сохраняет id всех жанров в локал сторидж
  async saveGenres() {
    try {
      return await this.fetchGenresList().then(genresArray => {
        const newGenresObj = {};
        this.changeGenresToBeUsable(genresArray, newGenresObj);

        return localStorage.setItem('genres', JSON.stringify(newGenresObj));
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Посылает запрос за id всех жанров
  async fetchGenresList() {
    const genres = await fetch(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=5692dca6012d3660a336300872bd664c&language=en-US'
    );
    return await genres.json();
  }

  // Получает id возвращает массив с названиями жанров
  makeGenresArrayMarkup(genre_ids, parsedGenres) {
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
    return Object.values(genresArray).join(', ');
  }
}
const genresClass = new Genres();
const parsedGenres = genresClass.parseGenres();
const allGenres = genresClass.parseGenres();
