import { btnModalClass } from '../modal/btnModalClass';
import { movieClass } from './movieClass';
import { refs } from '../refs';
export {createGalleryStickers};

// createGalleryStickers ();
function createGalleryStickers () {
	filmsInGallery = movieClass.parseFindedFilms();
	// console.log('filmsInGallery', filmsInGallery);
	filmsInGallery.forEach(film => {
		// console.log('film', film);
		if (btnModalClass.isFilmIncludesLSLibrary(film.id, 'watched')) {
			// console.log('btn', btnModalClass.isFilmIncludesLSLibrary(film.id, 'watched') );
			
			createFilmStickers(film, 'watched');
			// console.log('рисую вочед', `${film.id}`);
			
		}
		if (btnModalClass.isFilmIncludesLSLibrary(film.id, 'queue')) {
			createFilmStickers(film, 'queue');
			// console.log('рисую кью', );
			
		}
		
	});
	

}

function createFilmStickers(film, actions) {
	// console.log(`рисую стикер ${actions} на карточке фильма ${film.id}`, );
	const card = document.querySelector(`[data-id='${film.id}']`);
	// console.log('card', card);

	card.insertAdjacentHTML('beforeend', `<a>--${actions}--</a>`);
	
}