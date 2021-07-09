const inputEl = document.querySelector('#name-input');

const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', ebt);

function ebt() {
    
    if (inputEl.value === '' || inputEl.value === ' ') {
       spanEl.innerHTML = 'незнакомец';
    } else{
    spanEl.innerHTML = inputEl.value;
    }
}

