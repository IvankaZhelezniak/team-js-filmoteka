
saveGenres();
// Сохраняем айди жанров в локал сторидж
function saveGenres() {
	return fetchGenresList().then(genresArray =>
		genresArray.genres.map(saveGenresInLocalStorage));
}
// Посылает запрос за айди жанрами
function fetchGenresList() {
  return fetch(
    'https://api.themoviedb.org/3/genre/movie/list?api_key=5692dca6012d3660a336300872bd664c&language=en-US'
  ).then(response => {
    return response.json();
  });
}

// Сохраняет жанры в локал стордж
function saveGenresInLocalStorage(genre) {
  return localStorage.setItem(
    JSON.stringify(genre.id),
    JSON.stringify(genre.name)
  );
}
