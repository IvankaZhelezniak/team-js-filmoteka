const checkPosition = () => {
  if (window.scrollY >= 700) {
    document.querySelector('#cont-back-to-top').classList.add('_show');
  } else {
    document.querySelector('#cont-back-to-top').classList.remove('_show');
  }
};

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', checkPosition);
}
