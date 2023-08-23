// // Preload summon animations
// const preloadSummonAnimations = () => {
//   const summonAnimations = [
//     "FGO.mp4",
//     "Nikke.mp4",
//     "Blue Archive.mp4",
//     "Genshin Impact.mp4",
//     "Grand Blue Fantasy.mp4",
//     "Honkai Star Rail.mp4"
//     // Add more summon animations
//   ];

//   let videosLoaded = 0;

//   summonAnimations.forEach(animation => {
//     const video = document.createElement("video");
//     video.src = `./assets/Summon/${animation}`;
//     video.preload = "auto"; // Preload the video
//     video.style.display = "none"; // Hide the video element
//     video.addEventListener("loadeddata", () => {
//       videosLoaded++;
//       if (videosLoaded === summonAnimations.length) {
//         // All videos are preloaded, hide the loading container
//         const loadingContainer = document.querySelector(".loading-container");
//         loadingContainer.style.display = "none";
//       }
//     });
//     document.body.appendChild(video); // Append to body to trigger preload
//   });

//   console.log("Summon animations preloaded.");
// };

// // Call the function to start preloading summon animations
// preloadSummonAnimations();


// Preload summon animations
const preloadSummonAnimations = () => {
  const summonAnimations = [
    "FGO.mp4",
    "Nikke.mp4",
    "Blue Archive.mp4",
    "Genshin Impact.mp4",
    "Grand Blue Fantasy.mp4",
    "Honkai Star Rail.mp4",
    // Add more summon animations
  ];

  const cacheBuster = Date.now(); // Generate a cache-busting value

  summonAnimations.forEach(animationFile => {
    const video = document.createElement("video");
    video.src = `./assets/Summon/${animationFile}?${cacheBuster}`; // Append cache-buster query parameter
    video.preload = "auto"; // Preload the video
    video.style.display = "none"; // Hide the video element
    document.body.appendChild(video); // Append to body to trigger preload
  });

  console.log("Summon animations preloaded.");
};

const preloadCharacterImages = () => {
  const characters = [
    // Your character objects here
  ];

  characters.forEach(character => {
    const img = new Image();
    img.src = character.image;
  });

  console.log("Character images preloaded.");
};

// // Preload other assets
// const preloadOtherAssets = () => {
//   // Define other assets to preload (e.g., background images, icons, etc.)
//   // Example:
//   // const backgroundImg = new Image();
//   // backgroundImg.src = "./assets/background.jpg";

//   // Preload more assets as needed

//   console.log("Other assets preloaded.");
// };

// Call the functions to start preloading
preloadCharacterImages();
preloadSummonAnimations();
// preloadOtherAssets();

// Redirect to homepage.html after preloading
window.location.href = "homepage.html";
