export { fetchPopularMovies };
let page =1;
// Запрос популярных фильмов
async function fetchPopularMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=5692dca6012d3660a336300872bd664c&page=${page}`
  );
  if(response.ok) {
   page +=1;
  }

  return await response.json();
}

