const inputEl = document.querySelector('#name-input');

const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', ebt => {
    spanEl.innerHTML = inputEl.value;
});