const count = parseInt(localStorage.getItem('count') ?? '0') + 1;

const countElem = document.getElementById('count');
countElem.textContent = count;
localStorage.setItem('count', count);