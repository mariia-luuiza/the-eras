const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

let characters = [
  'image43.10',
  'image44.10',
  'image45.10',
  'image46.10',
  'image47.10',
  'image48.10',
  'image49.10',


];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 14) {
    clearInterval(this.loop);
    $("#exampleModal").modal('show');

  }
}

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame();

  } else {
    setTimeout(() => {

      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 500);
  }

}

const revealCard = ({ target }) => {

  if (target.parentNode.className.includes('reveal-card')) {
    return;
  }

  if (firstCard === '') {

    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

  } else if (secondCard === '') {

    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();

  }
}

const createCard = (character) => {

  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../img/${character}.jpg')`;

  card.appendChild(front);
  card.appendChild(back);

  //adiciona o evento de click que faz a poder ser revelada.
  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character)

  return card;
}

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters];

  //embraralha as cartas.
  const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

  //criar as cartas atrvés de um for. Enquanto o n de imagens não acabar criar uma carta
  shuffledArray.forEach((character) => {
    const card = createCard(character);
    grid.appendChild(card);
  });
}

const startTimer = () => {
  //contador 
  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);

}

$(document).ready(function() {
  //coloca o nome do player no contador
  spanPlayer.innerHTML = localStorage.getItem('player');
  startTimer();
  loadGame();

  let estear = localStorage.getItem('player');
  
  // <!--Easter Egg: caso o nome do player for becky havera uma fase secreta-->
  if (estear === 'Becky') {
    $(".btn-proximo").attr("href", "../custom night/fase.html");
  } else {
    $(".btn-proximo").attr("href", "../index.html");
  }
});
