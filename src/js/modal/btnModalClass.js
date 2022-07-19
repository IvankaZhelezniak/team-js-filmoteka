import { refs } from '../refs';
import {movieClass} from '../portfolio/movieClass';

export { btnModalClass };

const btnModalClass = new class BtnModal {
   isFilmIncludesLSLibrary(id, actions) {
    const filmsArray = movieClass.getFromLS(`${actions}`);
		if (filmsArray === null) {
			return false 
		}

		return filmsArray.find(film => {
		  if (film.id == id) {
			return true
			
		  }
		});
  }

  isFilmIncludesLSQueue(id) {
    const filmsArray = movieClass.getFromLS("queue");
		if (filmsArray === null) {
			return false 
		}

		return filmsArray.find(film => {
		  if (film.id == id) {
			return true
			
		  }
		});
  }

  changeWatchedBtnName() {
	refs.modalBtnWatched.textContent = 'in watched list';
  }

  isFilmIncludesLSQueue() {
	refs.modalBtnWatched.textContent = 'in queue list';
  }
  
}
