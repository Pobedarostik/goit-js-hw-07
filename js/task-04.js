
const counterEl = document.querySelectorAll('#counter button');

const counterValue = document.querySelector('#value');

const decrement = counterEl[0];
const increment = counterEl[1];

let number = 0;

decrement.addEventListener('click', () => {
    number -= 1;
    counterValue.innerHTML = number;
});


increment.addEventListener('click', () => {
    number += 1;
    counterValue.innerHTML = number;
    
});

