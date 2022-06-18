window.addEventListener('scroll', function () {
  const leaves = document.querySelectorAll('.leafScroll');
  const scrollItems = document.querySelectorAll('.scroll');
  const sky = document.querySelector('.sky');
  const sea = document.querySelector('.sea');

  let leafIndex = 0,
    leafLength = leaves.length;
  for (leafIndex; leafIndex < leafLength; leafIndex++) {
    if (window.pageYOffset < 500) {
      let posX = window.pageYOffset * leaves[leafIndex].dataset.ratex;
      let posY = window.pageYOffset * leaves[leafIndex].dataset.ratey;
      let rotate = window.pageYOffset * leaves[leafIndex].dataset.rotate;
      let position = leaves[leafIndex].dataset.position;

      leaves[
        leafIndex
      ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${
        rotate - position
      }deg)`;
    } else {
      // let posX = 500 * leaves[leafIndex].dataset.ratex;
      // let posY =
      //   500 * leaves[leafIndex].dataset.ratey + window.pageYOffset - 500;
      // let rotate = 500 * leaves[leafIndex].dataset.rotate;
      // let position = leaves[leafIndex].dataset.position;
      let posX = window.pageYOffset * leaves[leafIndex].dataset.ratex;
      let posY = window.pageYOffset * leaves[leafIndex].dataset.ratey;
      let rotate = window.pageYOffset * leaves[leafIndex].dataset.rotate;
      let position = leaves[leafIndex].dataset.position;
      leaves[
        leafIndex
      ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${
        rotate - position
      }deg)`;
    }
    if (window.pageYOffset > 3615) {
      leaves[leafIndex].style.display = 'none';
    } else {
      leaves[leafIndex].style.display = 'initial';
    }
  }

  if (window.pageYOffset > 2000) {
    sky.classList.remove('daysky');
    sky.classList.add('sunsetsky');
    sea.classList.add('sunsetsea');
  } else {
    sky.classList.add('daysky');
    sky.classList.remove('sunsetsky');
    sea.classList.remove('sunsetsea');
  }

  if (window.pageYOffset > 3615) {
    let index = 0,
      length = scrollItems.length;
    for (index; index < length; index++) {
      let posX = 3615 * scrollItems[index].dataset.ratex;
      let posY = 3615 * scrollItems[index].dataset.ratey;
      let rotate = 3615 * scrollItems[index].dataset.rotate;
      scrollItems[
        index
      ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${rotate}deg)`;
    }

    // clouds.style.display = 'none';
    // scrollItems[index].style.visibility = 'hidden';
    // sky.style.visibility = 'hidden';
    // document.body.style.backgroundColor = '#0d290a';
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
});
