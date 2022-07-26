import { createStartPortfolio, loadMoreCards, createNewStartPortfolio } from './createStartPortfolio';

export {observer};

//let page = 1;
const options = {
  rootMargin: '400px',
  threshold: 1.0,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadMoreCards();
    }
  });
}, options);


