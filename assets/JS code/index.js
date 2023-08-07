
// import summoning from './summoning.js'; 
// import animation from './animation.js';
// import history from './history.js';
// import resultsPage from './resultsPage.js';
// import Moneyspent from './moneySpent.js';
// import characters from './character.js';

import { get1RandomCharacter, get10RandomCharacters, getRandomCharacterImage } from './character.js';
// import { summonAnimations, playSummonAnimation, getRandomSummonAnimation } from './animation.js';
import { playSummonAnimation} from './animation.js';
import { clearCharacterContainer, saveCharactersLStorage } from './summoning.js';
// import { saveSummonedCharacters, displaySummonedCharacters } from './history.js';

const summonButton1 = document.getElementById('summon-button-1');
const summonButton10 = document.getElementById('summon-button-10');
const characterContainer = document.getElementById('character-container');
const skipButton = document.getElementById('skip-button'); 

// Event listener for Summon 1 button
summonButton1.addEventListener('click', () => {
  console.log("Clicked Summon-1");
  // Clear the character container and then play the summon animation to get 1 random character
  clearCharacterContainer();
  playSummonAnimation(get1RandomCharacter);
  saveCharactersLStorage();
});

// Event listener for Summon 10 button
summonButton10.addEventListener('click', () => {
  console.log("Clicked Summon-10");
  // Clear the character container and then play the summon animation to get 10 random characters
  clearCharacterContainer();
  playSummonAnimation(get10RandomCharacters);
  saveCharactersLStorage();
});
