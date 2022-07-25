const storageKey = 'preference-theme';
import { refs } from './refs';
let theme = 'light';

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
        refs.backdrop.classList.remove('darkModal');
        removeLightIconInvisible();        
        
    } else {
        theme = "dark";
        refs.bodyHtml.classList.add('dark');
        refs.backdrop.classList.add('darkModal');
        addLightIconInvisible();
        
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
        refs.backdrop.classList.remove('darkModal');
        removeLightIconInvisible();
        
    } else {
        theme = "dark";
        refs.bodyLibrary.classList.add('dark');
        refs.backdrop.classList.add('darkModal');
        addLightIconInvisible();
        
    }
    // console.log(theme);
    localStorage.setItem(storageKey, theme);
}


function updateTheme() {
    theme = localStorage.getItem(storageKey);
    // console.log(theme);
    if (refs.bodyHtml) {
        // console.log(refs.bodyHtml);
        if (theme === null) {
            theme = 'light';
            localStorage.setItem(storageKey, theme);
            // console.log(theme);
        }
        if (theme === 'light') {
            refs.bodyHtml.classList.remove('dark');
            refs.themeBtnHtml.classList.add('js-light');
            refs.backdrop.classList.remove('darkModal');
            removeLightIconInvisible();
                        
        } else {
            refs.bodyHtml.classList.add('dark');
            refs.themeBtnHtml.classList.remove('js-light');
            refs.backdrop.classList.add('darkModal');
            addLightIconInvisible();
               
        }
        // console.log(theme);
    } if (refs.bodyLibrary) {
        // console.log(refs.bodyLibrary);
        if (theme === 'light') {
            refs.bodyLibrary.classList.remove('dark');
            refs.themeBtnLibrary.classList.add('js-light');
            refs.backdrop.classList.remove('darkModal');
            removeLightIconInvisible();
            
        } 
        else {
            refs.bodyLibrary.classList.add('dark');
            refs.themeBtnLibrary.classList.remove('js-light');
            refs.backdrop.classList.add('darkModal');
            addLightIconInvisible();
        }
    }
}

function addLightIconInvisible() {
    refs.lightToggleIcon.classList.add('invisible');
    refs.darkToggleIcon.classList.remove('invisible');
}

function removeLightIconInvisible() {
    refs.lightToggleIcon.classList.remove('invisible');
    refs.darkToggleIcon.classList.add('invisible');
}
