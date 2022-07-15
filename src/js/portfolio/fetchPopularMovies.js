export { fetchPopularMovies };

// Запрос популярных фильмов
function fetchPopularMovies() {
  return fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=5692dca6012d3660a336300872bd664c'
  ).then(response => {
    return response.json();
  });
}
