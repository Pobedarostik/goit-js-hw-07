const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsEl = document.querySelector('#ingredients')

const liOne = document.createElement('li');
liOne.textContent = ingredients[0];

const liTwo = document.createElement('li');
liTwo.textContent = ingredients[1];

const liTree = document.createElement('li');
liTree.textContent = ingredients[2];

const liFour = document.createElement('li');
liFour.textContent = ingredients[3];

const liFife = document.createElement('li');
liFife.textContent = ingredients[4];

const liSix = document.createElement('li');
liSix.textContent = ingredients[5];



ingredientsEl.append(liOne, liTwo, liTree, liFour, liFife, liSix)