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
