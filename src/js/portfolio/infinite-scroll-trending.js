import { createStartPortfolio, loadMoreCards } from './createStartPortfolio';

export {observer}

let page = 1;
const options = {
  rootMargin: '400px',
  threshold: 1.0,
};
// createStartPortfolio();
const observer = new IntersectionObserver(entries => {
  console.log('entries', entries);
  
  entries.forEach(entry => {
    console.log('entry', entry);
    
    if (entry.isIntersecting) {
      console.log(entry.target);
      loadMoreCards();

    }
  });
}, options);

// observer.observe(document.querySelector('.scroll-guard'));
