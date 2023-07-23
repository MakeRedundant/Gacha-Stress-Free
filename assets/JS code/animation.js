// animations.js

// Array of summon animation file names
const summonAnimations = [
    'FGO.mp4',
    'Nikke.mp4',
    // Add more animation file names as needed
  ];
  
  // Function to get a random summon animation file name
  function getRandomSummonAnimation() {
    const randomIndex = Math.floor(Math.random() * summonAnimations.length);
    return summonAnimations[randomIndex];
  }
  
  