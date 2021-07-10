const inputEl = document.querySelector('#name-input');

const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', newValue);

function newValue(event) {

    spanEl.innerHTML = inputEl.value.trim() || 'незнакомец';

}