
// import summoning from './summoning.js'; 
// import animation from './animation.js';
// import history from './history.js';
// import resultsPage from './resultsPage.js';
// import Moneyspent from './moneySpent.js';
// import characters from './character.js';
import { summonAnimations, getRandomSummonAnimation } from './animation.js';
import characters, { get1RandomCharacter, get10RandomCharacters} from './character.js';

const summonButton1 = document.getElementById('summon-button-1');
const summonButton10 = document.getElementById('summon-button-10');
const characterContainer = document.getElementById('character-container');
const skipButton = document.getElementById('skip-button'); 


// Function to play the summon animation
function playSummonAnimation(numCharacters, charactersCallback) {
  const animationFile = getRandomSummonAnimation();
  const animationPath = `./assets/Summon/${animationFile}`;
  const summonAnimations = document.getElementById('summon-animation');
  summonAnimations.src = animationPath;
  summonAnimations.style.display = 'block'; // Show the video element
  summonAnimations.play();

  summonAnimations.addEventListener('play', () => {
    skipButton.style.display = 'block'; // Show the "Skip" button during the summon animation
  });

  // Function to handle skip functionality
  function skipAnimation() {
    summonAnimations.pause(); // Pause the animation
    summonAnimations.style.display = 'none'; // Hide the summon animation
    skipButton.style.display = 'none'; // Hide the "Skip" button
    // Show buttons and h1 element after the summon animation finishes
    document.getElementById('summon-button-1').style.display = 'block';
    document.getElementById('summon-button-10').style.display = 'block';
    document.querySelector('h1').style.display = 'block';
    charactersCallback(numCharacters); // Fetch the random characters
    // Remove the event listener after it's used
    skipButton.removeEventListener('click', skipAnimation);
  }

  // Event listener for the "Skip" button
  skipButton.addEventListener('click', skipAnimation);

  summonAnimations.addEventListener('ended', function() {
    // The animation finished playing, remove the event listener
    skipButton.removeEventListener('click', skipAnimation);
    summonAnimations.style.display = 'none'; // Hide the summon animation
    skipButton.style.display = 'none'; // Hide the "Skip" button
    // Show buttons and h1 element after the summon animation finishes
    document.getElementById('summon-button-1').style.display = 'block';
    document.getElementById('summon-button-10').style.display = 'block';
    document.querySelector('h1').style.display = 'block';
    charactersCallback(numCharacters); // Fetch the random characters
  });
}

// Event listener for Summon 1 button
summonButton1.addEventListener('click', () => {
  console.log("Clicked Summon-1");
  // Play the summon animation and get 1 random character
  playSummonAnimation(1, get1RandomCharacter);
});

// Event listener for Summon 10 button
summonButton10.addEventListener('click', () => {
  console.log("Clicked Summon-10");
  // Play the summon animation and get 10 random characters
  playSummonAnimation(10, get10RandomCharacters);
});


