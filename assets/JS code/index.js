
// import summoning from './summoning.js'; 
// import animation from './animation.js';
// import history from './history.js';
// import resultsPage from './resultsPage.js';
// import Moneyspent from './moneySpent.js';
// import characters from './character.js';

import { get1RandomCharacter, get10RandomCharacters, getRandomCharacterImage } from './character.js';
// import { summonAnimations, playSummonAnimation, getRandomSummonAnimation } from './animation.js';
import { playSummonAnimation } from './animation.js';


const summonButton1 = document.getElementById('summon-button-1');
const summonButton10 = document.getElementById('summon-button-10');
const characterContainer = document.getElementById('character-container');
const skipButton = document.getElementById('skip-button'); 

// Event listener for Summon 1 button
summonButton1.addEventListener('click', () => {
  console.log("Clicked Summon-1");
  // Play the summon animation and get 1 random character
  playSummonAnimation(get1RandomCharacter);
});

// Event listener for Summon 10 button
summonButton10.addEventListener('click', () => {
  console.log("Clicked Summon-10");
  // Play the summon animation and get 10 random characters
  playSummonAnimation(get10RandomCharacters);
});

