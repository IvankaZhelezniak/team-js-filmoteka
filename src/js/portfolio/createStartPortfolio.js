// Генерирует разметку популярных фильмов, первой страницы
// export default createStartPortfolio();
export { createStartPortfolio, loadMoreCards, createNewStartPortfolio };

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
  console.log('load more cards', );
  if (!movieClass.page) {
    console.log('запрос популярных', );
    onLoadMoreStartPortfolio();
    
  }
   
  if (movieClass.page) {
    return await movieClass.fetchSearchedMovies(movieClass.searchQuery).then(films => {
      movieClass.addToLocalStorageFindedFilms(films);
      createGalleryStickers();
      
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

  // createNewStartPortfolio();
}


async function createNewStartPortfolio() {

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
 
   if(!document.querySelector('.scroll-guard')) {
   refs.gallery.insertAdjacentHTML(
     'afterend', `
     <div class="scroll-guard"></div>`); 
   }

 });
 await createGalleryStickers();
 await observer.observe(document.querySelector('.scroll-guard'));
}

async function onLoadMoreStartPortfolio() {

  await movieClass.fetchPopularMovies().then(films => {
   movieClass.addToLocalStorageFindedFilms(films);

    refs.gallery.insertAdjacentHTML(
     'beforeend',
     films.results
       .map(film => {
         return createMurkup(film);
       })
       .join('')
   ); 
 
   if(!document.querySelector('.scroll-guard')) {
   refs.gallery.insertAdjacentHTML(
     'afterend', `
     <div class="scroll-guard"></div>`); 
   }

 });
 await createGalleryStickers();
 await observer.observe(document.querySelector('.scroll-guard'));
}