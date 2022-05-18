// window.addEventListener(
//   'scroll',
//   () => {
//     document.body.style.setProperty(
//       '--scroll',
//       window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
//     );
//   },
//   false
// );

//example from guy
// const section = document.querySelectorAll('section');

// function logPosition() {
//   if (window.scrollY > 490) {
//     document.documentElement.style.setProperty('--scroll', window.scrollY);
//   }
// }
// window.addEventListener('scroll', logPosition);

const scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

const elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
  elementsToShow.forEach(function (element) {
    if (window.scrollY > 10) {
      element.classList.remove('is-visible');
    } else {
      element.classList.add('is-visible');
    }
  });
  scroll(loop);
}
loop();

// function isElementInViewport(el) {
//   if (typeof jQuery === 'function' && el instanceof jQuery) {
//     el = el[0];
//   }
//   const rect = el.getBoundingClientRect();
//   return (
//     (rect.top <= 0 && rect.bottom >= 0) ||
//     (rect.bottom >=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.top <=
//         (window.innerHeight || document.documentElement.clientHeight)) ||
//     (rect.top >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight))
//   );
// }
