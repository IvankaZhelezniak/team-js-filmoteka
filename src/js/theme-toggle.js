const storageKey = 'preference-theme';
const refs = {
    body: document.querySelector('body'),
    infoNames: document.querySelectorAll('.gallery_info__name'),
    themeBtn: document.querySelector('.theme-toggle'),
    lightToggleIcon: document.querySelector('.lightToggleIcon'),
    darkToggleIcon: document.querySelector('.darkToggleIcon')
}

// console.log(refs.themeBtn);
// console.log(refs.body);
// console.log(refs.infoNames);

updateTheme();


refs.themeBtn.addEventListener('click', toggleTheme);

function toggleTheme(event) {
    event.preventDefault();
    const result = refs.themeBtn.classList.toggle('js-light');
    // console.log(result);
    if (result) {
        theme = 'light';
        refs.body.classList.remove('dark');
        refs.darkToggleIcon.classList.add('is-hidden');
        refs.lightToggleIcon.classList.remove('is-hidden');
        // refs.infoNames.map(infoName => infoName.classList.remove('darkText'));
    } else {
        theme = "dark";
        refs.body.classList.add('dark');
        refs.lightToggleIcon.classList.add('is-hidden');
        refs.darkToggleIcon.classList.remove('is-hidden');
        // refs.infoNames.map(infoName => infoName.classList.add('darkText'));
    }
    // console.log(theme);
    localStorage.setItem("preference-theme", theme);
}
function updateTheme() {
    theme = localStorage.getItem('preference-theme');
    // console.log(theme);
    if (theme === 'light') {
        refs.body.classList.remove('dark');
        refs.themeBtn.classList.add('js-light');
        refs.lightToggleIcon.classList.remove('is-hidden');
        refs.darkToggleIcon.classList.add('is-hidden');
        // refs.infoNames.map(infoName => infoName.classList.remove('darkText'));
        
    } else {
        refs.body.classList.add('dark');
        refs.themeBtn.classList.remove('js-light');
        refs.lightToggleIcon.classList.add('is-hidden');
        refs.darkToggleIcon.classList.remove('is-hidden');
        // refs.infoNames.map(infoName => infoName.classList.add('darkText'));

    }
}