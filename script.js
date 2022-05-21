window.addEventListener('scroll', function () {
  const target = document.querySelectorAll('.scroll');
  // const scrolled = window.pageYOffset;
  // const rate = scrolled * 0.5;
  // target.style.transform = `translate3d(0, ${rate}px, 0)`;

  let index = 0,
    length = target.length;
  for (index; index < length; index++) {
    if (window.pageYOffset < 481.5) {
      let posX = window.pageYOffset * target[index].dataset.ratex;
      let posY = window.pageYOffset * target[index].dataset.ratey;
      let rotate = window.pageYOffset * target[index].dataset.rotate;

      console.log(window.pageYOffset);
      console.log(`x = ${posX}, y = ${posY}, rotate=${rotate}`);
      target[
        index
      ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${rotate}deg)`;
    } else {
      let posX = 481.5 * target[index].dataset.ratex;
      let posY =
        481.5 * target[index].dataset.ratey + window.pageYOffset - 481.5;
      let rotate = 481.5 * target[index].dataset.rotate;

      target[
        index
      ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${rotate}deg)`;
    }
  }
});
