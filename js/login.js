const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({target}) => {
  if (target.value.length > 3) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}
const handleSubmit = (event) => {
  event.preventDefault();
  localStorage.setItem('player', input.value);

  // Exemplo de lógica para redirecionar para todas as fases com um intervalo de 1 segundo entre cada fase
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
        window.location = `fase${i}/fase${i}.html`;
    }, i * 1000); // Atraso de 1 segundo (1000 milissegundos) entre cada redirecionamento

  }
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);