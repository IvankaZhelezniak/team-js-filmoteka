// Генерирует разметку популярных фильмов, первой страницы
// export default createStartPortfolio();
export { createStartPortfolio, loadMoreCards };

import { createMurkup } from './createGalleryMarkup';
import { refs } from '../refs';
import { movieClass } from './movieClass';
import { createGalleryStickers } from './cteateGalleryStickers';
import {observer} from './infinite-scroll-trending';
createNewStartPortfolio();
async function createStartPortfolio() {
   await movieClass.fetchPopularMovies().then(films => {
    movieClass.saveToLocalStorageFindedFilms(films);

     refs.gallery.insertAdjacentHTML(
      'beforeend',
      films.results
        .map(film => {
          return createMurkup(film);
        })
        .join('')
    ); 

    refs.gallery.insertAdjacentHTML(
      'afterend', `
      <div class="scroll-guard"></div>`); 

  });
  await createGalleryStickers();
  await observer.observe(document.querySelector('.scroll-guard'));
}


async function loadMoreCards() {
  if (movieClass.page) {
    return await movieClass.fetchSearchedMovies(movieClass.searchQuery).then(films => {
      movieClass.addToLocalStorageFindedFilms(films);
      createGalleryStickers();
      console.log('запрос при подгрузке loadMoreCards', movieClass.searchQuery);
      console.log('текущая страница', movieClass.page);
      
   
       refs.gallery.insertAdjacentHTML(
        'beforeend',
        films.results
          .map(film => {
            return createMurkup(film);
          })
          .join('')
      ); 
    });
  }

  createNewStartPortfolio();
}


async function createNewStartPortfolio() {
  console.log('new', );
  
  await movieClass.fetchPopularMovies().then(films => {
   movieClass.saveToLocalStorageFindedFilms(films);

    refs.gallery.insertAdjacentHTML(
     'beforeend',
     films.results
       .map(film => {
         return createMurkup(film);
       })
       .join('')
   ); 

   refs.gallery.insertAdjacentHTML(
     'afterend', `
     <div class="scroll-guard"></div>`); 

 });
 await createGalleryStickers();
 await observer.observe(document.querySelector('.scroll-guard'));
}