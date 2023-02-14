'Use strict'

console.log('holi');



// Constantes y variables

const input = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const paragraphClue = document.querySelector('.js-clue');
const paragraphAttempts = document.querySelector('.js-attempts');



// funciones
function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
 
}

console.log(getRandomNumber(100));

function handleClik (event) {
   event.default;
    clue();
    numberAttempts();

}



// Eventos

button.addEventListener('click', handleClik );