const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsEl = document.querySelector('#ingredients')


function createElementLi(ingredient) {
  const arrayElementsLi = [];
  for (const el of ingredient) {
    const li = document.createElement('li');
    li.textContent = el;

    arrayElementsLi.push(li);
  }

  return arrayElementsLi;
}


const LiEl = createElementLi(ingredients);

ingredientsEl.append(...LiEl)
