// const { throttle } = require('lodash');

// const arrowUp = document.querySelector('#fixed');
// // Коли користувач прокручує вниз на 20 пікселів від верхньої частини документа, показуємо кнопку
// window.onscroll = throttle(scrollFunction, 200);

// arrowUp.addEventListener('click', topFunction);

// function scrollFunction() {
//   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//     arrowUp.classList.add('fixed');
//     return;
//   } else {
//     arrowUp.classList.remove('fixed');
//   }
// }

// const checkPosition = () => {
//     if(window.scrollY >= 200){
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
//   let elements = document.querySelectorAll('.fixed');
  
//   for (let elm of elements) {
//     observer.observe(elm);
//   }

