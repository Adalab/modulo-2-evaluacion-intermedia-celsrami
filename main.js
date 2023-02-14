'Use strict'

// Constantes y variables

const input = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const paragraphClue = document.querySelector('.js-clue');
const paragraphAttempts = document.querySelector('.js-attempts');



// Función número aleatorio

function getRandomNumber(max) {
 return Math.ceil(Math.random() * max);
}

const number = getRandomNumber(100);
console.log(`Mi número aleatorio es ${number}`);



function handleClik (event) {
   event.preventDefault;
  clue();
  numberAttempts();
}

// función pista
 
const clue = () => {
 const valueInput = parseInt(input.value);  
  if ( valueInput > number ) {
  paragraphClue.innerHTML = "Demasiado alto";
}

else if ( valueInput < number  ) {
  paragraphClue.innerHTML = "Demasiado bajo";
}

else if ( valueInput === number) {
  paragraphClue.innerHTML = "Has ganado campeona";
}

else {
 paragraphClue.innerHTML = "El número debe estar entre 1 y 100";
}
};

// Función contador de intentos

let counter = 0;

const numberAttempts = () => {
  counter++
  console.log(counter);
   paragraphAttempts.innerHTML =  `Números de intentos: ${counter}`;
};



// Eventos

button.addEventListener('click', handleClik );