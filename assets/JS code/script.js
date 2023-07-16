const summonButton = document.getElementById('summon-button');
const characterContainer = document.getElementById('character-container');

function fetchRandomCharacterImages() {
  const numberOfImages = 10;

  for (let i = 0; i < numberOfImages; i++) {
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

// Example usage
summonButton.addEventListener('click', fetchRandomCharacterImages);
