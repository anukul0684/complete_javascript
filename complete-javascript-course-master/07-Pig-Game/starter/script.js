'use strict';
//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let scores, playing, activePlayer, currentScore;
//starting conditions
const init = function () {
  scores = [0, 0];
  playing = true;

  activePlayer = 0;
  currentScore = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;

  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

//switch players
const switchPlayer = function () {
  currentScore = 0;

  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;

  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.remove('player--active');

  activePlayer = activePlayer === 0 ? 1 : 0;

  // document
  //   .querySelector(`.player--${activePlayer}`)
  //   .classList.add('player--active');

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice Functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2. Display dice
    diceEl.classList.remove('hidden');

    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1: if true, switch to next player. Make current score 0
    if (dice !== 1) {
      //add the dice to the currentScore
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
      //currentScore0.textContent = currentScore; //change later
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  console.log('Hold Button');
  if (playing) {
    //1. add the current score to the player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. score check less than hundred and toggle to another player. else current player wins the game
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
