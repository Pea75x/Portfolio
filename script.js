window.addEventListener('scroll', function () {
  const target = document.querySelectorAll('.scroll');
  const leaf1 = document.querySelectorAll('.font-leaf');
  const leaf2 = document.querySelectorAll('.leaf-2');

  let index = 0,
    length = target.length;
  for (index; index < length; index++) {
    if (window.pageYOffset < 481.5) {
      let posX = window.pageYOffset * target[index].dataset.ratex;
      let posY = window.pageYOffset * target[index].dataset.ratey;
      let rotate = window.pageYOffset * target[index].dataset.rotate;
      let position = target[index].dataset.position;

      target[
        index
      ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${
        rotate - position
      }deg)`;
    } else {
      let posX = 481.5 * target[index].dataset.ratex;
      let posY =
        481.5 * target[index].dataset.ratey + window.pageYOffset - 481.5;
      let rotate = 481.5 * target[index].dataset.rotate;
      let position = target[index].dataset.position;

      target[
        index
      ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${
        rotate - position
      }deg)`;
    }
  }
});
