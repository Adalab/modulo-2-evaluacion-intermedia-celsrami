'Use strict'

// constants and variables

const input = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const paragraphClue = document.querySelector('.js-clue');
const paragraphAttempts = document.querySelector('.js-attempts');



// function random number

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const number = getRandomNumber(100);
console.log(`Mi número aleatorio es ${number}`);



function handleClik(event) {
  event.preventDefault();
  clue();
  numberAttempts();
}

// track function
const paintmsj = (msj) => {
  paragraphClue.innerHTML = msj;
}



const clue = () => {
  const valueInput = parseInt(input.value);

  if (isNaN(valueInput)) {
    paintmsj("Debe introducir un número");
  }

  else if (valueInput < 1 || valueInput > 100) {
    paintmsj("El número debe estar entre 1 y 100");
  }

  else if (valueInput > number) {
    paintmsj("Demasiado alto");
  }

  else if (valueInput < number) {
    paintmsj("Demasiado bajo");
  }

  else {
    paintmsj("Has ganado campeona");
  }
};

// counter function

let counter = 0;

const numberAttempts = () => {
  counter++
  console.log(counter);
  paragraphAttempts.innerHTML = `Números de intentos: ${counter}`;
};



// Events

button.addEventListener('click', handleClik);