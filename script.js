//* scroll animation
window.addEventListener('scroll', function () {
  const leaves = document.querySelectorAll('.leafScroll');
  const scrollItems = document.querySelectorAll('.scroll');
  const sky = document.querySelector('.sky');
  const sea = document.querySelector('.sea');
  const clientWidth = window.screen.width;

  //* Just the leaves
  let leafIndex = 0,
    leafLength = leaves.length;
  for (leafIndex; leafIndex < leafLength; leafIndex++) {
    let posX = window.pageYOffset * leaves[leafIndex].dataset.ratex;
    let posY = window.pageYOffset * leaves[leafIndex].dataset.ratey;
    let rotate = window.pageYOffset * leaves[leafIndex].dataset.rotate;
    let position = leaves[leafIndex].dataset.position;

    leaves[
      leafIndex
    ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${
      rotate - position
    }deg)`;

    if (window.pageYOffset > 3500) {
      leaves[leafIndex].style.display = 'none';
    } else {
      leaves[leafIndex].style.display = 'initial';
    }
  }

  //*  CHANGE DAY TO NIGHT
  if (window.pageYOffset > 2000) {
    sky.classList.remove('daysky');
    sky.classList.add('sunsetsky');
    sea.classList.add('sunsetsea');
  } else {
    sky.classList.add('daysky');
    sky.classList.remove('sunsetsky');
    sea.classList.remove('sunsetsea');
  }

  //* sky, clouds sea and sun scroll
  if (window.pageYOffset > 4400) {
    let index = 0,
      length = scrollItems.length;
    for (index; index < length; index++) {
      let posX = 4400 * scrollItems[index].dataset.ratex;
      let posY = 4400 * scrollItems[index].dataset.ratey;
      let rotate = 4400 * scrollItems[index].dataset.rotate;
      scrollItems[
        index
      ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${rotate}deg)`;
    }
  } else {
    let index = 0,
      length = scrollItems.length;
    for (index; index < length; index++) {
      let posX = window.pageYOffset * scrollItems[index].dataset.ratex;
      let posY = window.pageYOffset * scrollItems[index].dataset.ratey;
      let rotate = window.pageYOffset * scrollItems[index].dataset.rotate;
      console.log(window.pageYOffset);
      scrollItems[
        index
      ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${rotate}deg)`;
    }
  }

  //*CHANGE OF WIDTH
  // console.log('width = ', clientWidth);
  // window.addEventListener('resize', function (event) {
  //   var newWidth = window.innerWidth;
  //   console.log('new width = ', newWidth);
  // });
});
