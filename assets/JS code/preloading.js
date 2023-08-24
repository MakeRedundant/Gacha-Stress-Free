const preloadSummonAnimations = () => {
  const summonAnimations = [
    "FGO.mp4",
    "Nikke.mp4",
    "Blue Archive.mp4",
    "Genshin Impact.mp4",
    "Grand Blue Fantasy.mp4",
    "Honkai Star Rail.mp4",
    // Add Princess Connect?? Arknights etc 
  ];
//None of this is working
  summonAnimations.forEach(animationFile => { 
    const video = document.createElement("video");
    video.src = `./assets/Summon/${animationFile}`;

    video.preload = "auto"; // Preload the video
    video.style.display = "none"; 

    video.addEventListener("loadeddata", () => {
      // Video loaded successfully
      console.log(`Video preloaded: ${animationFile}`);
    });

    video.addEventListener("error", () => {
      // Video loading failed
      console.error(`Error loading video: ${animationFile}`);
    });

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
