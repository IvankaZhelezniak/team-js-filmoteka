export { fetchPopularMovies };

// Запрос популярных фильмов
function fetchPopularMovies() {
  return fetch(
    'https://api.themoviedb.org/3/search/movie?api_key=5692dca6012d3660a336300872bd664c&language=en-US&page=1&include_adult=false&query=cat'
  ).then(response => {
    return response.json();
  });
}
