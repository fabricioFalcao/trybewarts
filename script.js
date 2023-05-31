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

const disciplines = () => {
  const subjects = document.querySelectorAll('.subject');
  const chosenDsiciplines = [];
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      chosenDsiciplines.push(subjects[index].value);
    }
  }
  return chosenDsiciplines.join(', ');
};

button2.addEventListener('click', (ev) => {
  ev.preventDefault();
  const name = document.getElementById('input-name').value;
  const surname = document.getElementById('input-lastname').value;
  const inputEmail = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = document.querySelector('input[name=family]:checked').value;
  const grade = document.querySelector('input[name=rate]:checked').value;
  const opinion = document.getElementById('textarea').value;
  document.getElementById('evaluation-form').hidden = true;
  document.getElementById('form-data').hidden = false;
  document.getElementById('p1').innerText = `Nome: ${name} ${surname}`;
  document.getElementById('p2').innerText = `Email: ${inputEmail}`;
  document.getElementById('p3').innerText = `Casa: ${house}`;
  document.getElementById('p4').innerText = `Família: ${family}`;
  document.getElementById('p5').innerText = `Matérias: ${disciplines()}`;
  document.getElementById('p6').innerText = `Avaliação: ${grade}`;
  document.getElementById('p7').innerText = `Observações: ${opinion}`;
});
