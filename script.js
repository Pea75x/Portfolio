// //* scroll animation
const codeSection = document.querySelector('.code-section');
const code = document.querySelectorAll('.code-image');
const section = document.querySelector('.about-section');

codeSection.addEventListener('scroll', () => {
  let codeIndex = 0;
  let codeLength = code.length;
  for (codeIndex; codeIndex < codeLength; codeIndex++) {
    let posY = codeSection.scrollTop * code[codeIndex].dataset.ratey;
    code[codeIndex].style.transform = `translateY(${posY}px)`;
  }
});

document.querySelectorAll('.subsection-arrow').forEach((arrow) => {
  arrow.addEventListener('click', () => {
    // Find the skills container next to the subsection
    const skillsContainer =
      arrow.closest('.skill-subsection').nextElementSibling;

    // Toggle the hidden class
    if (skillsContainer) {
      skillsContainer.classList.toggle('hidden');
    }

    // Optionally rotate the arrow
    arrow.classList.toggle('rotate-left');
  });
});

document.querySelectorAll('.experience-arrow').forEach((arrow) => {
  arrow.addEventListener('click', () => {
    // Find the skills container next to the subsection
    const companyDetails = arrow.closest('.company-header').nextElementSibling;

    // Toggle the hidden class
    if (companyDetails) {
      companyDetails.classList.toggle('hidden');
    }

    // Optionally rotate the arrow
    arrow.classList.toggle('rotate-right');
  });
});

// const content = document.querySelector('.content');

// content.addEventListener('scroll', function () {
//   console.log('hello');
//   const code = document.querySelectorAll('.ruby-code');

//   let scrollPosition = code.scrollTop;
//   console.log(scrollPosition);

//   let codeIndex = 0,
//     codeLength = code.length;
//   for (codeIndex; codeIndex < codeLength; codeIndex++) {
//     let posX = window.pageYOffset * code[codeIndex].dataset.ratex;
//     let posY = window.pageYOffset * code[codeIndex].dataset.ratey;
//     let rotate = window.pageYOffset * code[codeIndex].dataset.rotate;
//     let position = code[codeIndex].dataset.position;

//     code[
//       codeIndex
//     ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${
//       rotate - position
//     }deg)`;
// }
// });
//   const leaves = document.querySelectorAll('.leafScroll');
//   const scrollItems = document.querySelectorAll('.scroll');
//   const sky = document.querySelector('.sky');
//   const sea = document.querySelector('.sea');
//   // const clientWidth = window.screen.width;

//   //* Just the leaves
//   let leafIndex = 0,
//     leafLength = leaves.length;
//   for (leafIndex; leafIndex < leafLength; leafIndex++) {
//     let posX = window.pageYOffset * leaves[leafIndex].dataset.ratex;
//     let posY = window.pageYOffset * leaves[leafIndex].dataset.ratey;
//     let rotate = window.pageYOffset * leaves[leafIndex].dataset.rotate;
//     let position = leaves[leafIndex].dataset.position;

//     leaves[
//       leafIndex
//     ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${
//       rotate - position
//     }deg)`;

//     if (window.pageYOffset > 3500) {
//       leaves[leafIndex].style.display = 'none';
//     } else {
//       leaves[leafIndex].style.display = 'initial';
//     }
//   }

//   //*  CHANGE DAY TO NIGHT
//   if (window.pageYOffset > 2500) {
//     sky.classList.remove('daysky');
//     sky.classList.add('sunsetsky');
//     sea.classList.add('sunsetsea');
//   } else {
//     sky.classList.add('daysky');
//     sky.classList.remove('sunsetsky');
//     sea.classList.remove('sunsetsea');
//   }

//   //* sky, clouds sea and sun scroll
//   if (window.pageYOffset > 5900) {
//     sky.style.display = 'none';
//     sea.style.display = 'none';
//   } else if (window.pageYOffset < 2500) {
//     sky.style.display = 'initial';
//     sea.style.display = 'initial';

//     let index = 0,
//       length = scrollItems.length;
//     for (index; index < length; index++) {
//       let posX = window.pageYOffset * scrollItems[index].dataset.ratex;
//       let posY = window.pageYOffset * scrollItems[index].dataset.ratey;
//       let rotate = window.pageYOffset * scrollItems[index].dataset.rotate;
//       scrollItems[
//         index
//       ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${rotate}deg)`;
//     }
//   } else {
//     sky.style.display = 'initial';
//     sea.style.display = 'initial';

//     let index = 0,
//       length = scrollItems.length;
//     for (index; index < length; index++) {
//       let posX = (window.pageYOffset - 4000) * scrollItems[index].dataset.ratex;
//       let posY = window.pageYOffset * scrollItems[index].dataset.ratey;
//       let rotate = window.pageYOffset * scrollItems[index].dataset.rotate;
//       scrollItems[
//         index
//       ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${rotate}deg)`;
//     }
//   }

//   //*CHANGE OF WIDTH
//   console.log('width = ', clientWidth);
//   window.addEventListener('resize', function (event) {
//     var newWidth = window.innerWidth;
//     console.log('new width = ', newWidth);
//   });
// });

// //* navbar
// function menuOnClick() {
//   document.getElementById('menu-bar').classList.toggle('change');
//   document.getElementById('nav').classList.toggle('change');
//   document.getElementById('menu-bg').classList.toggle('change-bg');
// }
