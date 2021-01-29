/*'use strict';
console.log(document.querySelector('.message').textContent);

//What is DOM and DOM Manipulation
// DOM -
//Document Object Model - Structured representation of HTML documents. Allows JS to access HTML elements and styles to manipulate them. Ex. Change text, HTML attributes, and even CSS styles
//DOM is automatically created by Browser as soon as html page load and stores in a tree structure. each html element is a object
//DOM methods and properties for DOM manipulation is not part of JS
//DOM Methods are part of Web APIs can interact with JS. API application programming interface
//Web APIs are written in JS
//so can be interacted with JS
//Timers, Fetch

//selecting and manipulating elements
document.querySelector('.message').textContent = 'Correct Number 👌';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 22;
console.log(document.querySelector('.guess').value);
*/

'use strict';
let secretNumber;
function generateSecretNumber() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
}
generateSecretNumber();

let highScore;
let scoreValue;
//console.log(document.querySelector('.number').textContent);

document.querySelector('.check').addEventListener('click', function (e) {
  e.preventDefault();

  console.log(document.querySelector('.guess').value);

  //document.querySelector('.guess').value = null;

  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  scoreValue = Number(document.querySelector('.score').textContent);

  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number!';
  }
  //correct number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number 👌';
    document.querySelector('.number').textContent = secretNumber;
    scoreValue += 10;
    document.querySelector('.score').textContent = scoreValue;
    if (Number(document.querySelector('.highscore').textContent) === 0) {
      document.querySelector('.highscore').textContent = scoreValue;
    } else if (
      Number(document.querySelector('.highscore').textContent) <= scoreValue
    ) {
      document.querySelector('.highscore').textContent = scoreValue;
      highScore = scoreValue;
    }
    document.querySelector('body').style.backgroundColor = '#030';
    document.querySelector('.number').style.width = '30rem';
    generateSecretNumber();
  }
  //guess is wrong
  else if (guess !== secretNumber) {
    if (scoreValue > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? 'Too high. Try Again 🤞'
          : 'Too low. Try Again 🤞';
      scoreValue--;
      document.querySelector('.score').textContent = scoreValue;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  //   //greater than number
  //   else if (guess > secretNumber) {
  //     if (scoreValue > 1) {
  //       document.querySelector('.message').textContent = 'Too high. Try Again 🤞';
  //       scoreValue--;
  //       document.querySelector('.score').textContent = scoreValue;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   //less than correct number
  //   else if (guess < secretNumber) {
  //     if (scoreValue > 1) {
  //       document.querySelector('.message').textContent = 'Too low. Try Again 🤞';
  //       scoreValue--;
  //       document.querySelector('.score').textContent = scoreValue;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  generateSecretNumber();
  highScore = document.querySelector('.highscore').textContent;
  document.querySelector('.highscore').textContent = highScore;
  scoreValue = document.querySelector('.score').textContent;
  document.querySelector('.score').textContent = scoreValue;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
