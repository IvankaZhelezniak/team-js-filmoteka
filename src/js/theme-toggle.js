const storageKey = 'preference-theme';
import { refs } from './refs';

updateTheme();
changeTheme();

function changeTheme() {
    if (refs.bodyHtml) {
        refs.themeBtnHtml.addEventListener('click', toggleThemeHtml);
    } if (refs.bodyLibrary) {
        refs.themeBtnLibrary.addEventListener('click', toggleThemeLibrary);
    }
}

function toggleThemeHtml(event) {
    event.preventDefault();
    const result = refs.themeBtnHtml.classList.toggle('js-light');
    // console.log(result);
    if (result) {
        theme = 'light';
        refs.bodyHtml.classList.remove('dark');
        removeDarkClass();
        removeLightIconInvisible();        
        // refs.infoNames.map(infoName => infoName.classList.remove('darkText'));
    } else {
        theme = "dark";
        refs.bodyHtml.classList.add('dark');
        addDarkClass();
        addLightIconInvisible();
        // refs.infoNames.map(infoName => infoName.classList.add('darkText'));
    }
    // console.log(theme);
    localStorage.setItem(storageKey, theme);
}

function toggleThemeLibrary(event) {
    event.preventDefault();
    const result = refs.themeBtnLibrary.classList.toggle('js-light');
    // console.log(result);
    if (result) {
        theme = 'light';
        refs.bodyLibrary.classList.remove('dark');
        removeDarkClass();
        removeLightIconInvisible();
        // refs.infoNames.map(infoName => infoName.classList.remove('darkText'));
    } else {
        theme = "dark";
        refs.bodyLibrary.classList.add('dark');
        addDarkClass();
        addLightIconInvisible();
        // refs.infoNames.map(infoName => infoName.classList.add('darkText'));
    }
    // console.log(theme);
    localStorage.setItem(storageKey, theme);
}


function updateTheme() {
    theme = localStorage.getItem(storageKey);
    // console.log(theme);
    if (refs.bodyHtml) {
        // console.log(refs.bodyHtml);
        if (theme === 'light') {
            refs.bodyHtml.classList.remove('dark');
            refs.themeBtnHtml.classList.add('js-light');
            removeDarkClass();
            removeLightIconInvisible();
            // refs.infoNames.map(infoName => infoName.classList.remove('darkText'));            
        } else {
            refs.bodyHtml.classList.add('dark');
            refs.themeBtnHtml.classList.remove('js-light');
            addDarkClass();
            addLightIconInvisible();
            // refs.infoNames.map(infoName => infoName.classList.add('darkText'));    
        }
        
    } if (refs.bodyLibrary) {
        // console.log(refs.bodyLibrary);
        if (theme === 'light') {
            refs.bodyLibrary.classList.remove('dark');
            refs.themeBtnLibrary.classList.add('js-light');
            removeDarkClass();
            removeLightIconInvisible();
            // refs.infoNames.map(infoName => infoName.classList.remove('darkText'));
        } 
        else {
            refs.bodyLibrary.classList.add('dark');
            refs.themeBtnLibrary.classList.remove('js-light');
            addDarkClass();
            addLightIconInvisible();
            // refs.infoNames.map(infoName => infoName.classList.add('darkText'));    
        }
    }
}

function removeDarkClass() {
    refs.modalFilm.classList.remove('dark');
    refs.modalBtnWatched.classList.remove('darkBtn');
    refs.modalBtnQueue.classList.remove('darkBtn');
    refs.btnCloseModalFilm.classList.remove('darkBtn');
}
 function addDarkClass() {
    refs.modalFilm.classList.add('dark');
    refs.modalBtnWatched.classList.add('darkBtn');
    refs.modalBtnQueue.classList.add('darkBtn');
    refs.btnCloseModalFilm.classList.add('darkBtn');
 }

 function addLightIconInvisible() {
    refs.lightToggleIcon.classList.add('invisible');
    refs.darkToggleIcon.classList.remove('invisible');
 }

 function removeLightIconInvisible() {
    refs.lightToggleIcon.classList.remove('invisible');
    refs.darkToggleIcon.classList.add('invisible');
 }
