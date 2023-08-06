// history.js

const characterHistoryContainer = document.querySelector('.character-history');

function displayCharacterHistory() {
  const characterHistory = getCharacterHistory();

  characterHistoryContainer.innerHTML = '';

  characterHistory.forEach(character => {
    const characterCard = document.createElement('div');
    characterCard.className = 'character-card-history';

    const characterImage = document.createElement('img');
    characterImage.className = 'character-image-history';
    characterImage.src = character.image;
    characterImage.alt = 'Character Image';

    const characterInfo = document.createElement('p');
    characterInfo.textContent = `${character.name} (Rarity ${character.rarity})`;

    characterCard.appendChild(characterImage);
    characterCard.appendChild(characterInfo);
    characterHistoryContainer.appendChild(characterCard);
  });
}

// Call the function to display character history when the page loads
document.addEventListener('DOMContentLoaded', function () {
  displayCharacterHistory();
});


export { saveSummonedCharacters, displaySummonedCharacters };