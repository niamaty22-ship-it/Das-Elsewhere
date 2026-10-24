
/* ========================================
   COSMIC GARDEN — INTERACTIONS
======================================== */

// 1. YOUR PLANET COLLECTION
// Change each image path to match your actual files.

const planets = [
  {
    name: "Mercury",
    image: "assets/pictures/Mercury.png",
    subtitle: "The swift little world",
    description:
      "Mercury is the smallest planet in our Solar System and the closest to the Sun.",
    fact:
      "A single solar day on Mercury lasts 176 Earth days.",
    unlocked: true
  },
  {
    name: "Venus",
    image: "assets/pictures/Venus.png",
    subtitle: "The golden cloud",
    description:
      "Venus is wrapped in thick clouds and has an incredibly hot surface.",
    fact:
      "Venus is the hottest planet in our Solar System.",
    unlocked: false
  },
  {
    name: "Earth",
    image: "assets/pictures/Earth.png",
    subtitle: "Our little blue home",
    description:
      "Earth is our home planet, with liquid water on its surface and a remarkable variety of life.",
    fact:
      "Earth is the only planet currently known to host life.",
    unlocked: false
  },
  {
    name: "Mars",
    image: "assets/pictures/Mars.png",
    subtitle: "The rusty wanderer",
    description:
      "Mars is a cold, dusty world with enormous volcanoes and ancient signs of flowing water.",
    fact:
      "Olympus Mons on Mars is the tallest known volcano in the Solar System.",
    unlocked: false
  },
  {
    name: "Jupiter",
    image: "assets/pictures/Jupiter.png",
    subtitle: "The giant of the family",
    description:
      "Jupiter is a giant planet made mostly of hydrogen and helium, with a fascinating collection of moons.",
    fact:
      "Jupiter is the largest planet in our Solar System.",
    unlocked: false
  },
  {
    name: "Saturn",
    image: "assets/pictures/Saturn.png",
    subtitle: "The ringed wonder",
    description:
      "Saturn is a giant planet famous for its spectacular rings of ice and rocky material.",
    fact:
      "Saturn's average density is lower than that of water.",
    unlocked: false
  },
  {
    name: "Uranus",
    image: "assets/pictures/Uranus.png",
    subtitle: "The sideways planet",
    description:
      "Uranus is a distant ice giant that rotates with its axis tilted dramatically to one side.",
    fact:
      "Uranus rotates on its side compared with most planets.",
    unlocked: false
  },
  {
    name: "Neptune",
    image: "assets/pictures/Neptune.png",
    subtitle: "The distant blue",
    description:
      "Neptune is a cold, distant ice giant with incredibly fast winds.",
    fact:
      "Neptune takes about 165 Earth years to orbit the Sun.",
    unlocked: false
  }
];


const missions = [
  {
    title: "The Heat Paradox",
    story: "A strange signal arrives from Mercury. Two temperature readings seem impossibly far apart. Your mission is to discover what makes this little world so extreme.",
    clue: "Mercury has almost no atmosphere to distribute heat around the planet.",
    question: "Why can Mercury have extremely hot days and very cold nights?",
    options: [
      "It has a very thick atmosphere",
      "It has almost no atmosphere to retain and redistribute heat",
      "It is farther from the Sun than Neptune"
    ],
    answer: 1,
    explanation: "Correct! Mercury has an extremely thin exosphere, so it cannot redistribute and retain heat like Earth's atmosphere. Its long solar day also contributes to the extreme temperature cycle."
  },
  {
    title: "The Greenhouse Mystery",
    story: "The next signal points to Venus. It is farther from the Sun than Mercury, yet its surface is even hotter. Something in its atmosphere is trapping heat.",
    clue: "Venus has a very thick atmosphere made mostly of carbon dioxide.",
    question: "What is the main reason Venus is the hottest planet?",
    options: [
      "Its powerful greenhouse effect",
      "It is the largest planet",
      "It has no atmosphere"
    ],
    answer: 0,
    explanation: "Exactly! Venus's dense carbon dioxide atmosphere creates an intense greenhouse effect that traps heat."
  },
  {
    title: "The Habitability Test",
    story: "The signal reaches our home world. Before you continue, you must identify some of the conditions that make Earth suitable for life as we know it.",
    clue: "Think about liquid water, temperature, and Earth's atmosphere.",
    question: "Which set of conditions helps Earth support life?",
    options: [
      "Liquid water, suitable temperatures, and a protective atmosphere",
      "No sunlight and no atmosphere",
      "A surface made entirely of gas"
    ],
    answer: 0,
    explanation: "Well done! Earth's liquid water, atmosphere, energy sources, and many other interacting conditions make it habitable for life as we know it."
  },
  {
    title: "The Lost Water Case",
    story: "A faint signal emerges from the rusty landscape of Mars. The surface holds traces of a wetter past. Your job is to identify the evidence.",
    clue: "Look for landforms that resemble features made by flowing water.",
    question: "What is evidence that water once flowed on Mars?",
    options: [
      "Modern oceans covering the entire planet",
      "Ancient river channels and other water-shaped landforms",
      "Rings made of ice around Mars"
    ],
    answer: 1,
    explanation: "Correct! Ancient channels, minerals, and other geological features indicate that liquid water existed on Mars in the past."
  },
  {
    title: "The Giant's Secret",
    story: "The signal grows stronger near Jupiter. This enormous world has colourful cloud bands and a giant storm. What kind of planet are you investigating?",
    clue: "Jupiter is made mostly of the two lightest elements.",
    question: "What is Jupiter made mostly of?",
    options: [
      "Iron and solid rock",
      "Hydrogen and helium",
      "Liquid water"
    ],
    answer: 1,
    explanation: "That's right! Jupiter is a gas giant made mostly of hydrogen and helium, with no solid surface like Earth's."
  },
  {
    title: "The Ring Detective",
    story: "The signal passes through Saturn's spectacular rings. Your instruments detect countless tiny particles circling the planet.",
    clue: "The rings are not one solid structure.",
    question: "What are Saturn's rings made mostly of?",
    options: [
      "Ice particles and rocky material",
      "Solid gold",
      "A single giant sheet of metal"
    ],
    answer: 0,
    explanation: "Correct! Saturn's rings contain countless particles, mostly water ice with some rocky and dusty material."
  },
  {
    title: "The Tilted World",
    story: "Something looks unusual about Uranus. Its rotation is dramatically tilted, making it seem to roll around the Sun.",
    clue: "Think about the orientation of a planet's rotation axis.",
    question: "What makes Uranus unusual?",
    options: [
      "It has no rotation",
      "It rotates with an extreme axial tilt",
      "It is closer to the Sun than Mercury"
    ],
    answer: 1,
    explanation: "Exactly! Uranus has an axial tilt of about 98 degrees, so it rotates almost on its side relative to its orbit."
  },
  {
    title: "The Final Signal",
    story: "You have reached distant Neptune. Your instruments detect incredibly fast winds in its cold atmosphere. This is the final mystery of your expedition.",
    clue: "Sunlight is weak here, but atmospheric motion can also be powered by energy from within a planet.",
    question: "Which statement about Neptune's winds is correct?",
    options: [
      "Neptune has some of the fastest winds measured in the Solar System",
      "Neptune has no atmosphere",
      "Winds cannot exist on distant planets"
    ],
    answer: 0,
    explanation: "Mission complete! Neptune has extremely fast winds. Scientists study its internal heat and atmospheric dynamics to understand how its weather works."
  }
];


// 2. FIND THE ELEMENTS WE NEED

const welcomeScreen = document.querySelector("#welcome-screen");
const galaxyScreen = document.querySelector("#galaxy-screen");

const playButton = document.querySelector("#play-button");
const homeButton = document.querySelector("#home-button");

const floatingPlanets = document.querySelector("#floating-planets");
const planetField = document.querySelector("#planet-field");
const progressLabel = document.querySelector("#progress-label");

const planetModal = document.querySelector("#planet-modal");
const modalClose = document.querySelector("#modal-close");
const modalPlanet = document.querySelector("#modal-planet");
const modalStatus = document.querySelector("#modal-status");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalFact = document.querySelector("#modal-fact");
const modalAction = document.querySelector("#modal-action");


const missionPanel = document.querySelector("#mission-panel");
const missionStory = document.querySelector("#mission-story");
const missionClue = document.querySelector("#mission-clue");
const missionQuestion = document.querySelector("#mission-question");
const missionOptions = document.querySelector("#mission-options");
const missionFeedback = document.querySelector("#mission-feedback");
const missionContinue = document.querySelector("#mission-continue");


let selectedPlanet = null;
let completedMissions = loadCompletedMissions();

function loadCompletedMissions() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("dasElsewhereCompletedMissions") || "[]"
    );

    return Array.isArray(saved)
      ? saved.filter(
          (name) => planets.some((planet) => planet.name === name)
        )
      : [];
  } catch (error) {
    console.warn("Could not load saved mission progress.", error);
    return [];
  }
}

function saveCompletedMissions() {
  try {
    localStorage.setItem(
      "dasElsewhereCompletedMissions",
      JSON.stringify(completedMissions)
    );
  } catch (error) {
    console.warn("Could not save mission progress.", error);
  }
}

function updatePlanetUnlocks() {
  // Mercury is always the starting world.
  planets[0].unlocked = true;

  // A completed mission unlocks the following planet.
  planets.forEach((planet, index) => {
    if (completedMissions.includes(planet.name)) {
      planet.unlocked = true;

      if (planets[index + 1]) {
        planets[index + 1].unlocked = true;
      }
    }
  });
}

updatePlanetUnlocks();


// 3. SWITCH BETWEEN THE TWO SCREENS

function showScreen(screenToShow) {
  welcomeScreen.classList.remove("active");
  galaxyScreen.classList.remove("active");

  screenToShow.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

playButton.addEventListener("click", () => {
  showScreen(galaxyScreen);
});

homeButton.addEventListener("click", (event) => {
  event.preventDefault();
  closePlanetModal();
  showScreen(welcomeScreen);
});

// 4. CREATE FLOATING PLANET DECORATIONS


function createFloatingPlanets() {
  const container = document.querySelector("#floating-planets");

  if (!container) return;

  const decorations = [
    { x: 8,  y: 24, symbol: "✦", size: 22 },
    { x: 18, y: 57, symbol: "✧", size: 17 },
    { x: 28, y: 18, symbol: "✳", size: 15 },
    { x: 78, y: 23, symbol: "✦", size: 20 },
    { x: 89, y: 51, symbol: "✧", size: 25 },
    { x: 76, y: 76, symbol: "✳", size: 16 },
    { x: 12, y: 81, symbol: "✦", size: 18 },
    { x: 38, y: 76, symbol: "✧", size: 13 },
    { x: 65, y: 16, symbol: "✦", size: 14 },
    { x: 93, y: 83, symbol: "✧", size: 19 },
    { x: 4,  y: 44, symbol: "✦", size: 12 },
    { x: 56, y: 84, symbol: "✳", size: 14 },
    { x: 46, y: 12, symbol: "✧", size: 17 },
    { x: 23, y: 34, symbol: "✦", size: 11 },
    { x: 84, y: 38, symbol: "comet", size: 24 },
    { x: 32, y: 87, symbol: "comet", size: 18 }
  ];

  container.replaceChildren();

  decorations.forEach((item, index) => {
    const star = document.createElement("span");

    star.className = "welcome-star";

    if (item.symbol === "comet") {
      star.classList.add("is-comet");
      star.setAttribute("aria-hidden", "true");
    } else {
      star.textContent = item.symbol;
      star.setAttribute("aria-hidden", "true");
    }

    star.style.setProperty("--star-x", `${item.x}%`);
    star.style.setProperty("--star-y", `${item.y}%`);
    star.style.setProperty("--star-size", `${item.size}px`);

    const colors = ["#D8D5F2", "#EAB7EC", "#FFFFFF"];
    star.style.setProperty(
      "--star-color",
      colors[index % colors.length]
    );

    star.style.setProperty(
      "--star-duration",
      `${4 + (index % 4)}s`
    );

    star.style.setProperty(
      "--twinkle-duration",
      `${2 + (index % 3)}s`
    );

    star.style.setProperty(
      "--star-delay",
      `${-(index % 5)}s`
    );

    container.appendChild(star);
  });
}


function createFloatingObjects() {
  const container = document.querySelector("#floating-objects");

  if (!container) return;

  const objects = [
    { file: "dec-1.png", x: 8,  y: 35, size: 64, delay: "-2s" },
    { file: "dec-4.png", x: 85, y: 27, size: 78, delay: "-4s" },
    { file: "dec-7.png", x: 13, y: 76, size: 48, delay: "-1s" },
    { file: "dec-3.png", x: 87, y: 73, size: 58, delay: "-3s" },

    // Three new decorations
    { file: "dec-2.png", x: 27, y: 18, size: 52, delay: "-5s" },
    { file: "dec-5.png", x: 72, y: 38, size: 62, delay: "-2s" },
    { file: "dec-6.png", x: 48, y: 84, size: 46, delay: "-6s" },

    // five more
    { file: "dec-8.png", x: 32, y: 29, size: 79, delay: "-7s" },
    { file: "dec-9.png", x: 74, y: 65, size: 78, delay: "-2s" },
    { file: "dec-10.png", x: 54, y: 44, size: 76, delay: "-6s" },
    { file: "dec-11.png", x: 57, y: 18, size: 66, delay: "-5s" },
    { file: "dec-12.png", x: 22, y: 58, size: 77, delay: "-2s" },
    

];

  container.replaceChildren();

  objects.forEach((item, index) => {
    const img = document.createElement("img");

    img.className = "floating-object";
    img.src = `assets/pictures/${item.file}`;
    img.alt = "";
    img.draggable = false;

    img.style.setProperty("--object-x", `${item.x}%`);
    img.style.setProperty("--object-y", `${item.y}%`);
    img.style.setProperty("--object-size", `${item.size}px`);
    img.style.setProperty("--object-delay", item.delay);
    img.style.setProperty(
      "--object-speed",
      `${6 + index}s`
    );

    img.onerror = () => {
      console.warn(`Could not load decoration: ${img.src}`);
    };

    container.appendChild(img);
  });
}

// 5. BUILD THE GALAXY PLANET CARDS


function renderPlanets() {
  planetField.replaceChildren();

  const discoveredCount = planets.filter(
    (planet) => planet.unlocked
  ).length;

  progressLabel.textContent =
    `${discoveredCount} / ${planets.length} worlds discovered`;

  // Each planet has its own position on the galaxy map.
  // Values are percentages of the map's width and height.

const positions = [
  { x: 12, y: 24, size: 82, delay: "0s" },      // Mercury
  { x: 37, y: 21, size: 92, delay: "-2s" },     // Venus
  { x: 64, y: 25, size: 102, delay: "-4s" },    // Earth
  { x: 88, y: 29, size: 82, delay: "-1s" },     // Mars
  { x: 20, y: 68, size: 112, delay: "-3s" },    // Jupiter
  { x: 46, y: 72, size: 118, delay: "-1.5s" },  // Saturn
  { x: 72, y: 64, size: 100, delay: "-4.5s" },  // Uranus
  { x: 88, y: 73, size: 76, delay: "-2.5s" }    // Neptune
];

  planets.forEach((planet, index) => {
    const position = positions[index];

    const button = document.createElement("button");
    button.type = "button";

    button.className = "map-planet";
    button.classList.add(
      planet.unlocked ? "is-unlocked" : "is-locked"
    );

    button.style.setProperty(
      "--planet-x",
      `${position.x}%`
    );

    button.style.setProperty(
      "--planet-y",
      `${position.y}%`
    );

    button.style.setProperty("--planet-size", `${position.size}px`);
    
    button.style.setProperty(
      "--float-delay",
      position.delay
    );

    button.style.setProperty(
      "--float-duration",
      `${5 + (index % 4)}s`
    );

    button.setAttribute(
      "aria-label",
      planet.unlocked
        ? `Explore ${planet.name}, discovered`
        : `${planet.name}, locked. View details`
    );

    const image = document.createElement("img");
    image.className = "map-planet-image";
    image.src = planet.image;
    image.alt = "";
    image.draggable = false;

    image.addEventListener("error", () => {
      console.error(
        `Could not load ${planet.name} image: ${planet.image}`
      );
    });

    const name = document.createElement("span");
    name.className = "map-planet-name";
    name.textContent = planet.name;

    const status = document.createElement("span");
    status.className = "map-planet-status";
    status.textContent = planet.unlocked
      ? "✧ Discovered"
      : "🔒 Locked";

    button.append(image, name, status);

    button.addEventListener("click", () => {
      openPlanetModal(planet);
    });

    planetField.appendChild(button);
  });
}

// 6. SHOW PLANET DETAILS

function openPlanetModal(planet) {
  selectedPlanet = planet;

  modalPlanet.replaceChildren();

  const image = document.createElement("img");
  image.src = planet.image;
  image.alt = planet.name;
  modalPlanet.appendChild(image);

  modalTitle.textContent = planet.name;

  // Hide and reset the mission area when opening a planet.
  missionPanel.hidden = true;
  missionOptions.replaceChildren();
  missionFeedback.textContent = "";
  missionContinue.hidden = true;
  modalDescription.hidden = false;
  modalFact.hidden = false;

  if (planet.unlocked) {
    modalStatus.textContent = completedMissions.includes(planet.name)
      ? "✧ MISSION COMPLETED"
      : "✧ WORLD DISCOVERED";

    modalDescription.textContent = planet.description;
    modalFact.textContent = `Did you know? ${planet.fact}`;

    modalAction.hidden = false;
    modalAction.textContent = completedMissions.includes(planet.name)
      ? "Replay mission ↻"
      : "Investigate mystery ↗";
  } else {
    modalStatus.textContent = "✦ A NEW WORLD AWAITS";

    modalDescription.textContent =
      "This world is still hidden. Complete the previous planet's mission to continue your expedition.";

    modalFact.textContent = "Your next clue is waiting somewhere in the Solar System.";
    modalAction.hidden = true;
  }

  planetModal.hidden = false;
  modalClose.focus();
}


function closePlanetModal() {
  planetModal.hidden = true;
  selectedPlanet = null;
}

modalClose.addEventListener("click", closePlanetModal);

planetModal.addEventListener("click", (event) => {
  if (event.target === planetModal) {
    closePlanetModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !planetModal.hidden) {
    closePlanetModal();
  }
});


function startMission() {
  if (!selectedPlanet || !selectedPlanet.unlocked) return;

  const index = planets.indexOf(selectedPlanet);
  const mission = missions[index];

  if (!mission) return;

  missionPanel.hidden = false;
  modalDescription.hidden = true;
  modalFact.hidden = true;
  modalAction.hidden = true;

  missionStory.textContent = mission.story;
  missionClue.textContent = mission.clue;
  missionQuestion.textContent = mission.question;
  missionFeedback.textContent = "";
  missionOptions.replaceChildren();
  missionContinue.hidden = true;

  mission.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "mission-option";
    button.textContent = option;

    button.addEventListener("click", () => {
      checkMissionAnswer(optionIndex, mission, button);
    });

    missionOptions.appendChild(button);
  });

  modalStatus.textContent = `✦ MISSION ${index + 1} OF ${planets.length}`;
}

function checkMissionAnswer(optionIndex, mission, clickedButton) {
  if (!selectedPlanet) {
  return;
}

  if (optionIndex !== mission.answer) {
    missionFeedback.textContent =
      "Not quite, explorer. Revisit the clue and try another answer!";
    return;
  }

  // Save this completed mission.
  if (!completedMissions.includes(selectedPlanet.name)) {
  completedMissions.push(selectedPlanet.name);
  saveCompletedMissions();
}
  // Unlock the next planet and refresh the map.
  updatePlanetUnlocks();
  renderPlanets();

  // Mark the options as completed.
  const optionButtons = missionOptions.querySelectorAll("button");
  optionButtons.forEach((button) => {
    button.disabled = true;
  });

  clickedButton.classList.add("is-correct");

  missionFeedback.textContent = `✧ Mystery solved! ${mission.explanation}`;
  missionContinue.hidden = false;

  const index = planets.indexOf(selectedPlanet);
  const nextPlanet = planets[index + 1];

  if (nextPlanet) {
    modalStatus.textContent = `✧ ${nextPlanet.name.toUpperCase()} UNLOCKED!`;
    missionContinue.textContent = `Continue to ${nextPlanet.name} →`;
  } else {
    modalStatus.textContent = "✧ EXPEDITION COMPLETE";
    missionContinue.textContent = "Celebrate your discoveries ✧";
  }
}

modalAction.addEventListener("click", startMission);


const endingScreen = document.querySelector("#ending-screen");
const endingReplay = document.querySelector("#ending-replay");
const endingReturn = document.querySelector("#ending-return");

function showEnding() {
  closePlanetModal();
  galaxyScreen.classList.remove("active");
  welcomeScreen.classList.remove("active");

  endingScreen.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

missionContinue.addEventListener("click", () => {
  const index = planets.indexOf(selectedPlanet);
  const nextPlanet = planets[index + 1];

  if (nextPlanet && nextPlanet.unlocked) {
    closePlanetModal();
    openPlanetModal(nextPlanet);
    return;
  }

  // Only show the ending when every mission is complete.
  const allMissionsComplete = planets.every((planet) =>
    completedMissions.includes(planet.name)
  );

  if (allMissionsComplete) {
    showEnding();
  }
});

endingReturn.addEventListener("click", () => {
  endingScreen.hidden = true;
  showScreen(galaxyScreen);
  renderPlanets();
});

endingReplay.addEventListener("click", () => {
  // Keep saved progress: the visitor can replay the expedition.
  endingScreen.hidden = true;
  showScreen(galaxyScreen);
  renderPlanets();
});


// 8. START THE EXPERIENCE

createFloatingPlanets();
renderPlanets()

createFloatingObjects();

 