const inputEl = document.querySelector('#name-input');

const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', newValue);

function newValue(event) {

    if (inputEl.value === '' || event.data === ' ') {
        spanEl.innerHTML = 'незнакомец';
    } else {
        spanEl.innerHTML = inputEl.value;
    }
}

