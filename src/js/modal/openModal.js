import { refs } from '../refs';
import { movieClass } from '../portfolio/movieClass';

refs.gallery.addEventListener('click', onClickPortfolioItem);

function onClickPortfolioItem(evt) {
  // У каждого элемента списка есть дата-ид по которому находим фильм и рендерим модалку
  evt.preventDefault();

  let li = evt.target.closest('li');
  let id = li.getAttribute('data-id');

  if (!li) return;

  const film = movieClass.searchFilmByIdInLS(id);
  console.log('film', film);
  // Вызываем открыть модалку - передаем фильм из локал сторидж
  //   openModal();
}



refs.modalBtn.addEventListener('click', onModalBtnClick);

function onModalBtnClick(evt) {
  evt.preventDefault();

  const li = evt.target.closest('li');
  const id = li.getAttribute('data-id');
  const acions = li.getAttribute('data-actions');

  if (!li) return;

  const film = movieClass.searchFilmByIdInLS(id);
  console.log('button', acions, 'film', film);
}