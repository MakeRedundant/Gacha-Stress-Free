// Array of summon animation files
const summonAnimations = [
  "FGO.mp4",
  "Nikke.mp4",
  "Blue Archive.mp4",
  "Genshin Impact.mp4",
  "Grand Blue Fantasy.mp4",
  "Honkai Star Rail.mp4",

  // Add more animations
];

// Function to get a random summon animation file name
function getRandomSummonAnimation() {
  const randomIndex = Math.floor(Math.random() * summonAnimations.length);
  return summonAnimations[randomIndex];
}

// Function to play the summon animation
function playSummonAnimation(callback) {
  const animationFile = getRandomSummonAnimation();
  const animationPath = `./assets/Summon/${animationFile}`;
  const summonAnimations = document.getElementById("summon-animation");
  const skipButton = document.getElementById("skip-button");

  summonAnimations.src = animationPath;
  summonAnimations.style.display = "block"; // Show the video element

  summonAnimations.addEventListener("play", () => {
    if (skipButton) skipButton.style.display = "block"; // Show the "Skip" button during the summon animation

    // Preload the next animation while the current one is playing
    const nextAnimationFile = getRandomSummonAnimation();
    const nextAnimationPath = `./assets/Summon/${nextAnimationFile}`;
    const nextAnimation = new Audio(nextAnimationPath);
  });

  function skipAnimation() {
    summonAnimations.pause(); // Pause the animation
    summonAnimations.style.display = "none"; // Hide the summon animation
    skipButton.style.display = "none"; // Hide the "Skip" button
    callback(); // Invoke the callback function after animation finishes
    skipButton.removeEventListener("click", skipAnimation);
  }

  skipButton.addEventListener("click", skipAnimation);

  summonAnimations.addEventListener("ended", function () {
    skipButton.removeEventListener("click", skipAnimation);
    summonAnimations.style.display = "none"; // Hide the summon animation
    skipButton.style.display = "none"; // Hide the "Skip" button after the summon animation.
    callback(); // Invoke the callback function after animation finishes
  });

  summonAnimations.play(); // Start playing the current animation
}

// // Function to save the summoned characters to local storage
// function saveCharactersLStorage() {
//   const summonedCharacters = [];
//   const characterCards = document.querySelectorAll('.character-card');

//   characterCards.forEach(characterCard => {
//     const characterImage = characterCard.querySelector('.character-image');
//     summonedCharacters.push({
//       image: characterImage.src,
//       name: characterImage.alt,
//       rarity: parseInt(characterImage.getAttribute('data-rarity'))
//     });
//   });

//   localStorage.setItem('summonedCharacters', JSON.stringify(summonedCharacters));
//   console.log('Summoned characters saved to local storage:', summonedCharacters);
// }

// // Function to clear the character container
// function clearCharacterContainer() {
//   const characterContainer = document.getElementById('character-container');
//   characterContainer.innerHTML = '';
// }

export { summonAnimations, playSummonAnimation, getRandomSummonAnimation };
