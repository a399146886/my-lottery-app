const input = document.getElementById('input');
const addBtn = document.getElementById('add');
const itemsList = document.getElementById('items');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const result = document.getElementById('result');

let items = [];

addBtn.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        items.push(input.value.trim());
        const li = document.createElement('li');
        li.textContent = input.value.trim();
        itemsList.appendChild(li);
        input.value = '';

        if (items.length >= 1) {
            startBtn.disabled = false;
        }
    }
});

let interval;

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * items.length);
        result.textContent = items[randomIndex];
    }, 50);
});

stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
