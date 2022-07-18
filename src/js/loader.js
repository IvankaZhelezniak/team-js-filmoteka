let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('done');
    setTimeout(() => {
        mask.remove();
    }, 3000);
});