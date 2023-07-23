const summonButton1 = document.getElementById('summon-button-1');
const summonButton10 = document.getElementById('summon-button-10');
const characterContainer = document.getElementById('character-container');

//Summon Animations 

const summonAnimations = [
  'FGO.mp4',
  'Nikke.mp4',
  // Add more animation file names as needed
];







//Function that fetches 1 Random Character

function get1RandomCharacter() {
  const characterCard = document.createElement('div');
  characterCard.className = 'character-card';

  const characterImage = document.createElement('img');
  characterImage.className = 'character-image';
  characterImage.src = getRandomCharacterImageUrl();
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
    characterImage.src = getRandomCharacterImageUrl();
    characterImage.alt = 'Character Image';

    characterCard.appendChild(characterImage);
    characterContainer.appendChild(characterCard);
  }
}

function getRandomCharacterImageUrl() {
  const randomIndex = Math.floor(Math.random() * characters.length);
  const character = characters[randomIndex];

  return character.image;
}

// Event listener for Summon 1 button
summonButton1.addEventListener('click', get1RandomCharacter);

// Event listener for Summon 10 button
summonButton10.addEventListener('click', get10RandomCharacters);
