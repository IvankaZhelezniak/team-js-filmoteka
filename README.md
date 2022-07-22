**Read in other languages: [Русский](README.md), [Polski](README.pl.md).**

# Parcel template

Этот проект был создан при помощи Parcel. Для знакомства и настройки
дополнительных возможностей [обратись к документации](https://parceljs.org/).

## Подготовка нового проекта

1. Убедись что на компьютере установлена LTS-версия Node.js.
   [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Склонируй этот репозиторий.
3. Измени имя папки с `parcel-project-template` на имя своего проекта.
4. Создай новый пустой репозиторий на GitHub.
5. Открой проект в VSCode, запусти терминал и свяжи проект с GitHub-репозиторием
   [по инструкции](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Установи зависимости проекта в терминале командой `npm install` .
7. Запусти режим разработки, выполнив команду `npm start`.
8. Перейди в браузере по адресу [http://localhost:1234](http://localhost:1234).
   Эта страница будет автоматически перезагружаться после сохранения изменений в
   файлах проекта.

## Файлы и папки

- Все паршалы файлов стилей должны лежать в папке `src/sass` и импортироваться в
  файлы стилей страниц. Например, для `index.html` файл стилей называется
  `index.scss`.
- Изображения добавляй в папку `src/images`. Сборщик оптимизирует их, но только
  при деплое продакшн версии проекта. Все это происходит в облаке, чтобы не
  нагружать твой компьютер, так как на слабых машинах это может занять много
  времени.

## Деплой

Для настройки деплоя проекта необходимо выполнить несколько дополнительных шагов
по настройке твоего репозитория. Зайди во вкладку `Settings` и в подсекции
`Actions` выбери выбери пункт `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Пролистай страницу до последней секции, в которой убедись что выбраны опции как
на следующем изображении и нажми `Save`. Без этих настроек у сборки будет
недостаточно прав для автоматизации процесса деплоя.

![GitHub actions settings](./assets/actions-config-step-2.png)

Продакшн версия проекта будет автоматически собираться и деплоиться на GitHub
Pages, в ветку `gh-pages`, каждый раз когда обновляется ветка `main`. Например,
после прямого пуша или принятого пул-реквеста. Для этого необходимо в файле
`package.json` отредактировать поле `homepage` и скрипт `build`, заменив
`your_username` и `your_repo_name` на свои, и отправить изменения на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Далее необходимо зайти в настройки GitHub-репозитория (`Settings` > `Pages`) и
выставить раздачу продакшн версии файлов из папки `/root` ветки `gh-pages`, если
это небыло сделано автоматически.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплоя

Статус деплоя крайнего коммита отображается иконкой возле его идентификатора.

- **Желтый цвет** - выполняется сборка и деплой проекта.
- **Зеленый цвет** - деплой завершился успешно.
- **Красный цвет** - во время линтинга, сборки или деплоя произошла ошибка.

Более детальную информацию о статусе можно посмотреть кликнув по иконке, и в
выпадающем окне перейти по ссылке `Details`.

![Deployment status](./assets/status.png)

### Живая страница

Через какое-то время, обычно пару минут, живую страницу можно будет посмотреть
по адресу указанному в отредактированном свойстве `homepage`. Например, вот
ссылка на живую версию для этого репозитория
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

Если открывается пустая страница, убедись что во вкладке `Console` нет ошибок
связанных с неправильными путями к CSS и JS файлам проекта (**404**). Скорее
всего у тебя неправильное значение свойства `homepage` или скрипта `build` в
файле `package.json`.

## Как это работает

![How it works](./assets/how-it-works.png)

1. После каждого пуша в ветку `main` GitHub-репозитория, запускается специальный
   скрипт (GitHub Action) из файла `.github/workflows/deploy.yml`.
2. Все файлы репозитория копируются на сервер, где проект инициализируется и
   проходит сборку перед деплоем.
3. Если все шаги прошли успешно, собранная продакшн версия файлов проекта
   отправляется в ветку `gh-pages`. В противном случае, в логе выполнения
   скрипта будет указано в чем проблема.


=========================search by name 22.07===============================
import { refs } from '../refs';
import { createMurkup } from './createGalleryMarkup';
import { movieClass } from './movieClass';

refs.searchError.style.visibility = "hidden";

if(refs?.searchForm) {
  refs.searchForm.addEventListener("submit", handleSubmit);
}
let page = 1;

function handleSubmit(event) {
  event.preventDefault();
  const searchQuery = refs.searchForm.search.value.trim();

  if (searchQuery !== '') {
    createSearchedPortfolio(searchQuery);
    refs.searchForm.reset();
    }
  return searchQuery;
}

async function fetchSearchedMovies(searchQuery) {
  try {
    page = 1;
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=5692dca6012d3660a336300872bd664c&language=en-US&page=${page}&include_adult=false&query=${searchQuery}`
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function createSearchedPortfolio(input) {
    return await fetchSearchedMovies(input).then(films => {
    if(films.total_results !== 0) {
      movieClass.saveToLocalStorageFindedFilms(films);  
        refs.gallery.innerHTML = "";  
        return refs.gallery.insertAdjacentHTML(
        'beforeend',
        films.results
          .map(film => {
            return createMurkup(film);
          })
          .join('')
      );
    }
    refs.searchError.style.visibility = 'visible';
    setTimeout(onSearchError, 2000);
  });
}

const onSearchError = () => {
  refs.searchError.style.visibility = 'hidden';
};


=========================movieClass 22.07====================================
import { btnModalClass } from '../modal/btnModalClass';
export {
	movieClass
  };
  
  // ================================class Movie======================================
  let page = 1;
  const movieClass = new class Movie {
	constructor() {
		this.storageWatched = [];
		this.storageQueue = [];
	}
	async fetchPopularMovies() {
	  const response = await fetch(
		`https://api.themoviedb.org/3/trending/all/day?api_key=5692dca6012d3660a336300872bd664c&page=${page}`
	  );
	  page += 1;
	  return await response.json();
	}
  
	saveToLocalStorageFindedFilms(films) {
	  localStorage.setItem('findFilms', JSON.stringify(films.results));
	}

	saveToLibraryMovieInLS(film, actions) {		
		// console.log(`фильм сохранен в LS ${actions}`);
		let filmArray = this.getFromLS(`${actions}`);
		if (!filmArray){ filmArray =[]}

		filmArray.push(film);
		// console.log('actions, filmArray', actions, filmArray);
		localStorage.setItem(`${actions}`, JSON.stringify(filmArray));
	}

	removeFromLibraryMovieInLS(filmToRemove, actions) {
		// console.log(`фильм удален из LS ${actions}`);
		
		let filmArray = this.getFromLS(`${actions}`);
		const removeIndex = filmArray.findIndex(film => film.id == filmToRemove.id);

		filmArray.splice(removeIndex, 1);
		
		localStorage.setItem(`${actions}`, JSON.stringify(filmArray));
	}

	changeModalBtnName(li, id, actions) {
		// console.log('work', );
		
		if (btnModalClass.isFilmIncludesLSLibrary( id, actions)) {
			return li.textContent = `remove from ${actions}`;
		  }
		  return li.textContent = `add to ${actions}`;
	}

	getFromLS(key) {
		const value = localStorage.getItem(`${key}`);
		
		try{
			// console.log('JSON.parse(value)', JSON.parse(value));
		return JSON.parse(value);
		} catch(error) {
			if (error.name ==='SyntaxError') {
				console.log('Ошибка парса JSON', );
			}
		}
	}

	isModalFilmIncludesLS(id, actions) {
		const filmsArray = movieClass.getFromLS(actions);
		if (filmsArray === null) {
			// return console.log('фильма нет в локал сторидж', );
		}

		return filmsArray.find(film => {
		  if (film.id == id) {
			// return console.log('фильм уже есть в локал сторидж', );
			
		  }
		});
	  }


	modifyDate(release_date, first_air_date) {
	  // в некоторых нет даты релиза, используют дату первого полета
	  if (release_date) {
		return release_date.slice(0, 4);
	  } else if (first_air_date) {
		return first_air_date.slice(0, 4);
	  }
	  return '';
	}
  
	modifyGenres(genre_ids) {
	  const genresArray = [];
	  for (let id of genre_ids) {
		// если название пустое -- пропускаем
		if (allGenres[id] === null || allGenres[id] === undefined) {
		  continue;
		}
  
		// если массив 2+ жанров -- пишем 'Other'
		if (genresArray.length === 2) {
		  genresArray.push('Other');
		  break;
		}
		genresArray.push(allGenres[id]);
	  }
	  return Object.values(genresArray).join(', ');
	}
  
	makeGenresList(genres_id, genres) {
	  const genresArray = [];
	  
	  for (let id of genres_id) {
		const index = genres.findIndex(genre => genre.id == id);
		
		if (genres[index] === null || genres[index] === undefined) {
		  continue;
		}

		// если массив 2+ жанров -- пишем 'Other'
		if (genresArray.length === 2) {
		  genresArray.push('Other');
		  break;
		}
		genresArray.push(genres[index].name);
		
	  }
	  return Object.values(genresArray).join(', ');
	}
  
	makeAllMoodalGenresList(genre_ids, genres) {
		const genresArray = [];
		for (let id of genre_ids) {
			const index = genres.findIndex(genre => genre.id == id);
		  if (genres[index] === null || genres[index] === undefined) {
			continue;
		  }
		  genresArray.push(genres[index].name);
		}
		return Object.values(genresArray).join(', ');
	  }

	parseFindedFilms() {
	  const value = localStorage.getItem('findFilms');
	  let parsedFindedFilmsFromLS = [];
	  try {
		parsedFindedFilmsFromLS = JSON.parse(value);
	  } catch (error) {
		if (error.name === 'SyntaxError') {
		  console.log('Ошибка парса JSON');
		}
	  }
	  return parsedFindedFilmsFromLS;
	}
  
	searchFilmByIdInLS(id) {
	  const parsedFindedFilmsFromLS = movieClass.parseFindedFilms();
	  return parsedFindedFilmsFromLS.find(film => {
		if (film.id == id) {
		  return film;
		}
	  });
	}
  }
  
  



  // ============================Genres (not use)=====================
  class Genres {
	constructor() {}
	// Возвращает объект с жанрами в виде ключ-значение
	changeGenresToBeUsable(genresArray, newGenresObj = {}) {
	  genresArray.genres.map(genre => {
		newGenresObj[genre.id] = genre.name;
		return newGenresObj;
	  });
	}
  
	// Парсит жанры из локал сторидж
	async parseGenres() {
	  await this.saveGenres();
	  const value = localStorage.getItem('genres');
	  let parseGanres = {};
	  try {
		parseGanres = JSON.parse(value);
	  } catch (error) {
		console.log(error);
		if (error.name === 'SyntaxError') {
		  console.log('Ошибка парса JSON');
		}
	  }     
	  return parseGanres;
	}
  
	// Сохраняет id всех жанров в локал сторидж
	async saveGenres() {
	  try {
		return await this.fetchGenresList().then(genresArray => {
		  const newGenresObj = {};
		  this.changeGenresToBeUsable(genresArray, newGenresObj);
  
		  return localStorage.setItem('genres', JSON.stringify(newGenresObj));
		});
	  } catch (error) {
		console.log(error);
	  }
	}
  
	// Посылает запрос за id всех жанров
	async fetchGenresList() {
	  const genres = await fetch(
		'https://api.themoviedb.org/3/genre/movie/list?api_key=5692dca6012d3660a336300872bd664c&language=en-US'
	  );
	  return await genres.json();
	}
  
	// Получает id возвращает массив с названиями жанров
	makeGenresArrayMarkup(genre_ids, parsedGenres) {
	  const genresArray = [];
  
	  for (id of genre_ids) {
		// если название пустое -- пропускаем
		if (parsedGenres[id] === null || parsedGenres[id] === undefined) {
		  continue;
		}
  
		// если массив 2+ жанров -- пишем 'Other'
		if (genresArray.length === 2) {
		  genresArray.push('Other');
		  break;
		}
		genresArray.push(parsedGenres[id]);
	  }
	  return Object.values(genresArray).join(', ');
	}
  }
  const genresClass = new Genres();
  const parsedGenres = genresClass.parseGenres();
  const allGenres = genresClass.parseGenres();
  


=========================fetchPopularMovies 22.07============================
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


=========================createStartPortfolio 22.07==========================

// Генерирует разметку популярных фильмов, первой страницы
export default createStartPortfolio();
export {createStartPortfolio};

import { createMurkup } from './createGalleryMarkup';
import { refs } from '../refs';
import { movieClass } from './movieClass';

async function createStartPortfolio() {
  return await movieClass.fetchPopularMovies().then(films => {
    movieClass.saveToLocalStorageFindedFilms(films);

    return refs.gallery.insertAdjacentHTML(
      'beforeend',
      films.results
        .map(film => {
          return createMurkup(film);
        })
        .join('')
    );
  });
}