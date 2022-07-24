// const { throttle } = require('lodash');

// const arrowUp = document.querySelector('#footer-link-up');
// // Коли користувач прокручує вниз на 20 пікселів від верхньої частини документа, показуємо кнопку
// window.onscroll = throttle(scrollFunction, 400);

// arrowUp.addEventListener('click', topFunction);

// function scrollFunction() {
//   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//     arrowUp.classList.add('footer-link-up-active');
//     return;
//   } else {
//     arrowUp.classList.remove('footer-link-up-active');
//   }
// }

// const checkPosition = () => {
//     if(window.scrollY >= 700){
//         document.querySelector('#back-to-top').classList.add('_show')
//     } else {
//         document.querySelector('#back-to-top').classList.remove('_show')
//     }
// }
        
// if(typeof window !== 'undefined'){
//     window.addEventListener('scroll', checkPosition)
// }




// function onEntry(entry) {
//     // entry.forEach(change => {
//       if (window.scrollY >= 700) {
//        change.target.classList.add('element-show');
//       }
//     // });
//   }
  
//   let options = {
//     threshold: [0.5] };
//   let observer = new IntersectionObserver(onEntry, options);
//   let elements = document.querySelectorAll('.footer-animation');
  
//   for (let elm of elements) {
//     observer.observe(elm);
//   }




//   let page = 1;
// const options = {
//   rootMargin: '400px',
//   threshold: 1.0,
// };
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // console.log(entry.target);
//       createStartPortfolio();
//     }
//   });
// }, options);

// observer.observe(document.querySelector('.scroll-guard'));

