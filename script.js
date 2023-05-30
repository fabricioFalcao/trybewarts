const button1 = document.querySelector('#login');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

button1.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const button2 = document.querySelector('#submit-btn');
const agreement = document.getElementById('agreement');
let toggle = true;
agreement.addEventListener('input', () => {
  toggle = !toggle;
  button2.disabled = toggle;
});

const counterContainer = document.querySelector('#counterContainer');

const counter = document.createElement('p');
counter.id = 'counter';
counter.innerText = 500;
counterContainer.appendChild(counter);

const textArea = document.querySelector('#textarea');

textArea.addEventListener('keyup', () => {
  counter.innerText = 500 - textArea.value.length;
});
