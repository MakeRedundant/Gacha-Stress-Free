// animations.js

// Array of summon animation file names
const summonAnimations = [
    'FGO.mp4',
    'Nikke.mp4',
    'Blue Archive.mp4',
    'Genshin Impact.mp4',
    'Grand Blue Fantasy.mp4',
    'Honkai Star Rail.mp4',

    // Add more animations
  ];
  
  // Function to get a random summon animation file name
  function getRandomSummonAnimation() {
    const randomIndex = Math.floor(Math.random() * summonAnimations.length);
    return summonAnimations[randomIndex];
  }
  



