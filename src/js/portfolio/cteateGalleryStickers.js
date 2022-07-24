import { btnModalClass } from '../modal/btnModalClass';
import { movieClass } from './movieClass';
import { refs } from '../refs';
export {createGalleryStickers, createFilmStickers, removeFilmStickers};


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
	// const card = document.querySelector(`[data-id='${film.id}']`);
	// console.log('card', card);
	const divWrapper = document.querySelector(`[data-status='${film.id}']`);
	// console.log('divWrapper', divWrapper);
	if(actions == 'watched') {
		const content = '<svg class="header-nav-logo-icon" width="40" height="40"><use class="icon-color" href="../../src/image/icons/sprite.svg#icon-film"></use></svg>'

		divWrapper.insertAdjacentHTML('afterbegin', `<button type="button" class="status-btn" data-id=${film.id}${actions}>${content}</button>`);
	}

	if(actions == 'queue') {
		const content = '<svg class="" width="24" height="24"><use class="icon-color" href="/src/images/icons/sprite.svg#icon-film"></use></svg>'
		divWrapper.insertAdjacentHTML('beforeend', `<button type="button" class="status-btn" data-id=${film.id}${actions}>${content}</button>`);
	}
	
	// divWrapper.insertAdjacentHTML('', `<button type="button" class="status-btn" data-id=${film.id}${actions}>${actions}</button>`);
}

function removeFilmStickers(film, actions) {
	// console.log(`удаляю стикер ${actions} на карточке фильма ${film.id}`, );
	const statusBtn = document.querySelector(`[data-id='${film.id}${actions}']`)
    // console.log('statusBtn', statusBtn);
	statusBtn.remove();
}