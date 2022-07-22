import { btnModalClass } from '../modal/btnModalClass';
import { movieClass } from './movieClass';
import { refs } from '../refs';

createGalleryStickers ();
function createGalleryStickers () {
	filmsInGallery = movieClass.parseFindedFilms();
	// console.log('filmsInGallery', filmsInGallery);
	filmsInGallery.forEach(film => {
		// console.log('film', film);
		if (btnModalClass.isFilmIncludesLSLibrary(film.id, 'watched')) {
			createFilmStickers(film, 'watched');
			// console.log('рисую вочед', );
			
		}
		if (btnModalClass.isFilmIncludesLSLibrary(film.id, 'queue')) {
			createFilmStickers(film, 'queue');
			// console.log('рисую кью', );
			
		}
		
	});
	

}

function createFilmStickers(film, actions) {
	console.log(`рисую стикер ${actions} на карточке фильма ${film.id}`, );
	
}