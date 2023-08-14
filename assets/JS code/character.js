import { clearCharacterContainer } from './summoning.js';


const characters = [
  {
    name: "Bocchi",
    series: "Bocchi the Rock, ぼっち・ざ・ろっく！",
    image: "./assets/Images/characters/Rarity 1/Bocchi_1.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Bocchi ",
    series: "Bocchi the Rock, ぼっち・ざ・ろっく！",
    image: "./assets/Images/characters/Rarity 2/Bocchi_2.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 2,
  },
  {
    name: "Yumeko Jabami ",
    series: "Kakegurui: Compulsive Gambler, 賭ケグルイ",
    image: "./assets/Images/characters/Rarity 1/Yumeko_1.jpg",
    gender: "F",
    description:
      "A girl who transfers into Hyakkaou Private Academy. She might look like an attractive young lady, but she is actually a Kakegurui, someone who finds pleasure in taking risks.",
    rarity: 1,
  },
  {
    name: "Gudako",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 1/Gudako.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Gudako",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 1/gacha.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Gudako",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 1/gacha_1.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Ganyu",
    series: "Genshin Impact",
    image: "./assets/Images/characters/Rarity 1/Ganyu.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Hu Tao",
    series: "Genshin Impact",
    image: "./assets/Images/characters/Rarity 1/Hu_Tao.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Miku",
    series: "Hatsune Miku",
    image: "./assets/Images/characters/Rarity 1/Miku_racing.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Gura",
    series: "V Tubers",
    image: "./assets/Images/characters/Rarity 1/Gura.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Rin Toshaka",
    series: "Fate",
    image: "./assets/Images/characters/Rarity 2/Rin_toshaka_2.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 2,
  },
  {
    name: "Illya",
    series: "Fate",
    image: "./assets/Images/characters/Rarity 1/IIlya_1.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Medea",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 1/Medea.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Medusa Casual",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 1/Medusa_casual.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Astolfo",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 1/Astolfo.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Castoria",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 1/Castoria_1.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Mash",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 1/Mash_1.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Saber",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 2/Saber.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 2,
  },
  {
    name: "Saber (food)",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 1/Saber_food.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Sakura Matou",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 1/Sakura_Matou.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Scathach",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 1/Scathach.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Quetzalcoatl",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 1/Quetzalcoatl.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Morgan",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 1/Morgan.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Mordred_1",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 1/Mordred_1.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Saber (Chibi)",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 1/Saber_chibi.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Melt",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 3/Melt.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 3,
  },
  {
    name: "Mash (Waltz in the MOONLIGHT/LOSTROOM) ",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 3/Mash_dress.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 3,
  },
  {
    name: " Ishtar + Eresh ",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 3/Ishtar_Eresh.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 3,
  },
  {
    name: "Abigail Willaims ",
    series: "Fate Grand Order",
    image: "./assets/Images/characters/Rarity 3/Abigail.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 3,
  },
  {
    name: "Pecorine",
    series: "Princess Connect",
    image: "./assets/Images/characters/Rarity 2/Pecorine.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 2,
  },
  {
    name: "Kyaru",
    series: "Princess Connect",
    image: "./assets/Images/characters/Rarity 2/kyaru.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 2,
  },
  {
    name: "Kokkoro",
    series: "Princess Connect",
    image: "./assets/Images/characters/Rarity 2/kokkoro_1.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 2,
  },
  {
    name: "Kokkoro (adult)",
    series: "Princess Connect",
    image: "./assets/Images/characters/Rarity 3/kokkoro_adult.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 3,
  },
  {
    name: "Historia",
    series: "Attack on Titan",
    image: "./assets/Images/characters/Rarity 1/Historia.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Cynthia_chibi",
    series: "Pokemon",
    image: "./assets/Images/characters/Rarity 1/Cynthia_chibi.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Rena Hyugga",
    series: "Higurashi",
    image: "./assets/Images/characters/Rarity 1/Rena.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Rena Hyugga (Chibi)",
    series: "Higurashi",
    image: "./assets/Images/characters/Rarity 1/Rena_chibi.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Satoko (chibi)",
    series: "Higurashi",
    image: "./assets/Images/characters/Rarity 1/Satoko.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Nanachi",
    series: "Made in Abyss",
    image: "./assets/Images/characters/Rarity 1/Nanchi.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Inoue Takina",
    series: "Lycoris Recoil",
    image: "./assets/Images/characters/Rarity 1/Inoue_Takina.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Chisato",
    series: "Lycoris Recoil",
    image: "./assets/Images/characters/Rarity 1/Chisato.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Chisato",
    series: "Lycoris Recoil",
    image: "./assets/Images/characters/Rarity 2/Chisato_1.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 2,
  },
  {
    name: "Lenneth",
    series: "Valkyrie Profile",
    image: "./assets/Images/characters/Rarity 2/Lenneth.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 2,
  },
  {
    name: "Mitsuri",
    series: "Demon Slayer",
    image: "./assets/Images/characters/Rarity 2/Mitsuri.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 2,
  },
  {
    name: "Rem (Steampunk)",
    series: "ReZero",
    image: "./assets/Images/characters/Rarity 2/Rem_steampunk.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 2,
  },
  {
    name: "Rem (Kimino)",
    series: "ReZero",
    image: "./assets/Images/characters/Rarity 2/Rem_kimino.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Rem & Ram",
    series: "ReZero",
    image: "./assets/Images/characters/Rarity 3/Rem_Ram.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 3,
  },
  {
    name: "Rei",
    series: "Evangelion",
    image: "./assets/Images/characters/Rarity 1/Rei.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Asuka",
    series: "Evangelion",
    image: "./assets/Images/characters/Rarity 1/Asuka.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Mari",
    series: "Evangelion",
    image: "./assets/Images/characters/Rarity 1/Mari.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Chiaki",
    series: "Yuru Camp",
    image: "./assets/Images/characters/Rarity 1/Chiaki.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Nadeshiko",
    series: "Yuru Camp",
    image: "./assets/Images/characters/Rarity 1/Nadeshiko.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Yor Forger",
    series: "Spy Family",
    image: "./assets/Images/characters/Rarity 1/Yor.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Chika",
    series: "Love is war",
    image: "./assets/Images/characters/Rarity 2/Chika_1.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 2,
  }, 
  {
    name: "Kaguya + Chika",
    series: "Love is war",
    image: "./assets/Images/characters/Rarity 3/Kaguya_Chika.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 3,
  }, 
  {
    name: "Hoshino",
    series: "Blue Archive",
    image: "./assets/Images/characters/Rarity 1/Hoshino.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Shirako (chibi)",
    series: "Blue Archive",
    image: "./assets/Images/characters/Rarity 1/Shirako.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Melina",
    series: "Elden Ring",
    image: "./assets/Images/characters/Rarity 1/Melina.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Melina (suit)",
    series: "Elden Ring",
    image: "./assets/Images/characters/Rarity 2/Melina_suit.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 2,
  },
  {
    name: "Ranni",
    series: "Elden Ring",
    image: "./assets/Images/characters/Rarity 3/Ranni.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 3,
  },
  {
    name: "Beatrice",
    series: "Umineko",
    image: "./assets/Images/characters/Rarity 3/Beatrice.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 3,
  },
  {
    name: "Ai Hoshino",
    series: "Koi blah blah",
    image: "./assets/Images/characters/Rarity 1/AI_Hoshino_1.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Ai Hoshino (swimsuit)",
    series: "Koi blah blah",
    image: "./assets/Images/characters/Rarity 3/AI_Hoshino.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 3,
  },
  {
    name: "Helm",
    series: "Nikke",
    image: "./assets/Images/characters/Rarity 1/Helm.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Nhilster",
    series: "Nikke",
    image: "./assets/Images/characters/Rarity 1/Nhilster.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Modernia",
    series: "Nikke",
    image: "./assets/Images/characters/Rarity 3/Modernia.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 3,
  },
  {
    name: "Scarlet",
    series: "Nikke",
    image: "./assets/Images/characters/Rarity 3/Scarlet.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 3,
  },
  {
    name: "Forest",
    series: "Original AI",
    image: "./assets/Images/characters/Rarity 1/original_1.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Food",
    series: "Original AI",
    image: "./assets/Images/characters/Rarity 1/original_2.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Science",
    series: "Original AI",
    image: "./assets/Images/characters/Rarity 1/original_3.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Tears",
    series: "Original AI",
    image: "./assets/Images/characters/Rarity 1/original_4.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Sunflower",
    series: "AI",
    image: "./assets/Images/characters/Rarity 1/original_5.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Pharoah",
    series: "Original AI",
    image: "./assets/Images/characters/Rarity 1/original_6.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Witch",
    series: "Original AI",
    image: "./assets/Images/characters/Rarity 1/original_7.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },
  {
    name: "Kimino",
    series: "Original AI",
    image: "./assets/Images/characters/Rarity 1/original_8.jpg",
    gender: "F",
    description: "This is the description of Character 1.",
    rarity: 1,
  },

  // Add more character objects as needed
];

const characterContainer = document.getElementById("character-container");

// Function to fetch 1 Random Character and create a character card
function get1RandomCharacter() {
  const characterCard = document.createElement("div");
  characterCard.className = "character-card";

  const characterImage = document.createElement("img");
  characterImage.className = "character-image";
  characterImage.src = getRandomCharacterImage();
  characterImage.alt = "Character Image";

  characterCard.appendChild(characterImage);
  characterContainer.appendChild(characterCard);
}

// Function to fetch 10 Random Characters and create character cards
function get10RandomCharacters() {
  const numberOfCharacters = 10;

  for (let i = 0; i < numberOfCharacters; i++) {
    const characterCard = document.createElement("div");
    characterCard.className = "character-card";

    const characterImage = document.createElement("img");
    characterImage.className = "character-image";
    characterImage.src = getRandomCharacterImage();
    characterImage.alt = "Character Image";
    characterImage.width = 300;
    characterImage.height = 550;
    characterImage.loading = 'lazy'; // Set the loading attribute to "lazy"

    characterCard.appendChild(characterImage);
    characterContainer.appendChild(characterCard);
  }
}


function getRandomCharacterImage() {
  const randomValue = Math.random();
  let selectedRarity = 1;

  if (randomValue <= 0.6) {
    selectedRarity = 1; // 60% chance
  } else if (randomValue <= 0.91) {
    selectedRarity = 2; // 31% chance
  } else {
    selectedRarity = 3; // 9% chance
  }

  const charactersOfSelectedRarity = characters.filter(character => character.rarity === selectedRarity);

  const randomIndex = Math.floor(Math.random() * charactersOfSelectedRarity.length);
  const selectedCharacter = charactersOfSelectedRarity[randomIndex];

  if (!selectedCharacter || !selectedCharacter.image) {
    console.log("Selected character or image is undefined");
    return ""; 
  }

  console.log(`Summoned character: ${selectedCharacter.name} (Rarity ${selectedCharacter.rarity})`);
  return selectedCharacter.image;
}

// Function to add a character to the character history in local storage
function addToCharacterHistory(character) {
  const characterHistory = getCharacterHistory();
  characterHistory.push(character);
  localStorage.setItem('characterHistory', JSON.stringify(characterHistory));
}

// Function to get the character history from local storage
function getCharacterHistory() {
  const characterHistoryJSON = localStorage.getItem('characterHistory');
  return characterHistoryJSON ? JSON.parse(characterHistoryJSON) : [];
}




export { addToCharacterHistory, getCharacterHistory};

export { get1RandomCharacter, get10RandomCharacters, getRandomCharacterImage };
export default characters;
