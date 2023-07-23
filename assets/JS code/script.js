
const summonButton1 = document.getElementById('summon-button-1');
const summonButton10 = document.getElementById('summon-button-10');
const characterContainer = document.getElementById('character-container');



function playSummonAnimation() {
  const animationFile = getRandomSummonAnimation();
  const animationPath = `./assets/Summon/${animationFile}`;
  const summonAnimations = document.getElementById('summon-animation');
  summonAnimations.src = animationPath;
  summonAnimations.style.display = 'block'; // Show the video element
  summonAnimations.play();

  // Hide buttons and h1 element during the summon animation
  document.getElementById('summon-button-1').style.display = 'none';
  document.getElementById('summon-button-10').style.display = 'none';
  document.querySelector('h1').style.display = 'none';

  summonAnimations.addEventListener('ended', function() {
    summonAnimations.style.display = 'none'; // Hide the summon animation
    // Show buttons and h1 element after the summon animation finishes
    document.getElementById('summon-button-1').style.display = 'block';
    document.getElementById('summon-button-10').style.display = 'block';
    document.querySelector('h1').style.display = 'block';
    get10RandomCharacters();
  });
}



//Function that fetches 1 Random Character

function get1RandomCharacter() {
  const characterCard = document.createElement('div');
  characterCard.className = 'character-card';

  const characterImage = document.createElement('img');
  characterImage.className = 'character-image';
  characterImage.src = getRandomCharacterImage();
  characterImage.alt = 'Character Image';

  characterCard.appendChild(characterImage);
  characterContainer.appendChild(characterCard);
}
//Function that fetches 10 Random Character

function get10RandomCharacters() {
  const numberOfCharacters = 10;

  for (let i = 0; i < numberOfCharacters; i++) {
    const characterCard = document.createElement('div');
    characterCard.className = 'character-card';

    const characterImage = document.createElement('img');
    characterImage.className = 'character-image';
    characterImage.src = getRandomCharacterImage();
    characterImage.alt = 'Character Image';

    characterCard.appendChild(characterImage);
    characterContainer.appendChild(characterCard);
  }
}

function getRandomCharacterImage() {
  const randomIndex = Math.floor(Math.random() * characters.length);
  const character = characters[randomIndex];

  return character.image;
}

// // Event listener for Summon 1 button
// summonButton1.addEventListener('click', () => {
//   // Play the summon animation
//   playSummonAnimation();
//   // Get 1 random character
//   get1RandomCharacter();
// });

// // Event listener for Summon 10 button
// summonButton10.addEventListener('click', () => {
//   // Play the summon animation
//   playSummonAnimation();
//   // Get 10 random characters
//   get10RandomCharacters();
// });


// Event listener for Summon 1 button
summonButton1.addEventListener('click', () => {
  // Play the summon animation and get 1 random character
  playSummonAnimation(1, get1RandomCharacter);
});

// Event listener for Summon 10 button
summonButton10.addEventListener('click', () => {
  // Play the summon animation and get 10 random characters
  playSummonAnimation(10, get10RandomCharacters);
});