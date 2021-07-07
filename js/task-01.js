const categoryes = document.querySelector("#categories");
const quantityCategory = 
  console.log(`В списке ${categoryes.children.length} категории.`);

 
const categoryHeading = categoryes.querySelectorAll('h2');

const allCategory = document.querySelectorAll('.item');
const quantityChildren = [];
for (const el of allCategory) {
quantityChildren.push(el.children[1].childElementCount)
  
}




console.log(`Категория: ${categoryHeading[0].textContent}, Количество элементов: ${quantityChildren[0]}`);

console.log(`Категория: ${categoryHeading[1].textContent}, Количество элементов: ${quantityChildren[1]}`);

console.log(`Категория: ${categoryHeading[2].textContent}, Количество элементов: ${quantityChildren[2]}`);
