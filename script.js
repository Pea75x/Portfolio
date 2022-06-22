// window.addEventListener('resize', function (event) {
//   var newWidth = window.innerWidth;
//   console.log('new width = ', newWidth);
// });

window.addEventListener('scroll', function () {
  const leaves = document.querySelectorAll('.leafScroll');
  const scrollItems = document.querySelectorAll('.scroll');
  const sky = document.querySelector('.sky');
  const sea = document.querySelector('.sea');
  let myTest = document.querySelector('.testing');

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

  //  CHANGE DAY TO NIGHT
  if (window.pageYOffset > 2000) {
    sky.classList.remove('daysky');
    sky.classList.add('sunsetsky');
    sea.classList.add('sunsetsea');
  } else {
    sky.classList.add('daysky');
    sky.classList.remove('sunsetsky');
    sea.classList.remove('sunsetsea');
  }

  // CHANGE OF WIDTH
  let clientWidth = window.screen.width;
  console.log('width = ', clientWidth);

  if (clientWidth > 1150) {
    myTest.style.color = 'white';

    if (window.pageYOffset > 3500) {
      let index = 0,
        length = scrollItems.length;
      for (index; index < length; index++) {
        let posX = 3500 * scrollItems[index].dataset.ratex;
        let posY = 3500 * scrollItems[index].dataset.ratey;
        let rotate = 3500 * scrollItems[index].dataset.rotate;
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
  }
  if (clientWidth < 1150) {
    myTest.style.color = 'orange';
    // if (window.pageYOffset > 4000) {
    //   let index = 0,
    //     length = scrollItems.length;
    //   for (index; index < length; index++) {
    //     let posX = 4000 * scrollItems[index].dataset.ratex;
    //     let posY = 4000 * scrollItems[index].dataset.ratey;
    //     let rotate = 4000 * scrollItems[index].dataset.rotate;
    //     scrollItems[
    //       index
    //     ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${rotate}deg)`;
    //   }
    // } else {
    //   let index = 0,
    //     length = scrollItems.length;
    //   for (index; index < length; index++) {
    //     let posX = window.pageYOffset * scrollItems[index].dataset.ratex;
    //     let posY = window.pageYOffset * scrollItems[index].dataset.ratey;
    //     let rotate = window.pageYOffset * scrollItems[index].dataset.rotate;
    //     console.log(window.pageYOffset);
    //     scrollItems[
    //       index
    //     ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${rotate}deg)`;
    //   }
    // }
  }
});
