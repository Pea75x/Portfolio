//* scroll animation
window.addEventListener('scroll', function () {
  const leaves = document.querySelectorAll('.leafScroll');
  const scrollItems = document.querySelectorAll('.scroll');
  const sky = document.querySelector('.sky');
  const sea = document.querySelector('.sea');
  // const clientWidth = window.screen.width;

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
  // if (window.pageYOffset > 2500) {
  //   sky.classList.remove('daysky');
  //   sky.classList.add('sunsetsky');
  //   sea.classList.add('sunsetsea');
  // } else {
  //   sky.classList.add('daysky');
  //   sky.classList.remove('sunsetsky');
  //   sea.classList.remove('sunsetsea');
  // }

  //* sky, clouds sea and sun scroll
  if (window.pageYOffset > 5900) {
    sky.style.display = 'none';
    sea.style.display = 'none';
  } else if (window.pageYOffset < 2500) {
    sky.style.display = 'initial';
    sea.style.display = 'initial';

    let index = 0,
      length = scrollItems.length;
    for (index; index < length; index++) {
      let posX = window.pageYOffset * scrollItems[index].dataset.ratex;
      let posY = window.pageYOffset * scrollItems[index].dataset.ratey;
      let rotate = window.pageYOffset * scrollItems[index].dataset.rotate;
      scrollItems[
        index
      ].style.transform = `translate3d(${posX}px, ${posY}px, 0) rotate(${rotate}deg)`;
    }
  } else {
    sky.style.display = 'initial';
    sea.style.display = 'initial';

    let index = 0,
      length = scrollItems.length;
    for (index; index < length; index++) {
      let posX = (window.pageYOffset - 4000) * scrollItems[index].dataset.ratex;
      let posY = window.pageYOffset * scrollItems[index].dataset.ratey;
      let rotate = window.pageYOffset * scrollItems[index].dataset.rotate;
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

//* navbar
function menuOnClick() {
  document.getElementById('menu-bar').classList.toggle('change');
  document.getElementById('nav').classList.toggle('change');
  document.getElementById('menu-bg').classList.toggle('change-bg');
}

//? APLYiD Junior Developer Challenge
const categories = [
  'Misc',
  'Programming',
  'Dark',
  'Pun',
  'Spooky',
  'Christmas'
];
let buttons = [];
const categoriesContainer = document.querySelector('.categories-container');
const jokeText = document.querySelector('.joke-text');
const jokeSearchInput = document.querySelector('.joke-search-input');
const jokeSearchSubmit = document.querySelector('.joke-search-submit');
let jokeCategory = 'Any';

// Load a joke on page load
const api = 'https://v2.jokeapi.dev/joke/';
const blacklist = 'blacklistFlags=religious,political,racist,sexist,explicit';

const getJoke = (category, textSearch) => {
  let textString = '';
  textSearch && (textString = `&contains=${textSearch}`);

  axios
    .get(`${api}${category}?${blacklist}${textString}`)
    .then((response) => {
      const joke = response.data;
      if (joke.error == true) {
        jokeText.innerHTML = joke.message;
      } else if (joke.type === 'twopart') {
        jokeText.innerHTML = `${joke.setup} - ${joke.delivery}`;
      } else {
        jokeText.innerHTML = `${joke.joke}`;
      }
    })
    .catch((error) => console.error(error));
};
getJoke(jokeCategory, '');

// add the category buttons
function createCategoryButtons() {
  for (let i = 0; i < categories.length; i++) {
    const button = document.createElement('div');
    button.setAttribute('class', categories[i]);
    button.setAttribute('id', 'category-button');
    buttons.push(button);
    categoriesContainer.appendChild(button);
    button.innerHTML = categories[i];
  }
}
createCategoryButtons();

function changeCategory(event) {
  jokeCategory = event.target.innerText;
  getJoke(jokeCategory, '');
}

// Narrow search when button is clicked
buttons.forEach((button) => button.addEventListener('click', changeCategory));

function textSearch(event) {
  const text = jokeSearchInput.value;
  getJoke(jokeCategory, text);
  jokeSearchInput.value = '';
}
// Narrow search when using text search
jokeSearchSubmit.addEventListener('click', textSearch);
