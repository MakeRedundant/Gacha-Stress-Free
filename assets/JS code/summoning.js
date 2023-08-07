// Function to save the summoned characters to local storage
function saveCharactersLStorage() {
    const summonedCharacters = [];
    const characterCards = document.querySelectorAll('.character-card');
  
    characterCards.forEach(characterCard => {
      const characterImage = characterCard.querySelector('.character-image');
      summonedCharacters.push({
        image: characterImage.src,
        name: characterImage.alt,
        rarity: parseInt(characterImage.getAttribute('data-rarity'))
      });
    });
  
    localStorage.setItem('summonedCharacters', JSON.stringify(summonedCharacters));
    console.log('Summoned characters saved to local storage:', summonedCharacters);
  }
  
  // Function to clear the character container
  function clearCharacterContainer() {
    const characterContainer = document.getElementById('character-container');
    characterContainer.innerHTML = '';
  }
  
  export { clearCharacterContainer, saveCharactersLStorage };