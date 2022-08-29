const db = {};

db.home = {
  name: "jai",
};

db.dest = {
  index: "01",
  title: "PICK YOUR DESTINATION",
  default: 1,
  planets: [
    {
      id: 1,
      name: "MOON",
      desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      dist: "384,400 KM",
      time: "3 DAYS",
      img: "./assets/destination/image-moon.webp",
    },
    {
      id: 2,
      name: "MARS",
      desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      dist: "225 MIL. KM",
      time: "9 MONTHS",
    },
    {
      id: 3,
      name: "EUROPA",
      desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      dist: "628 MIL. KM",
      time: "3 YEARS",
    },
    {
      id: 4,
      name: "TITAN",
      desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      dist: "1.6 BIL. KM",
      time: "7 YEARS",
    },
  ],
};

db.crew = {
  index: "02",
  title: "MEET YOUR CREW",
  default: 1,
  crew: [
    {
      id: 1,
      desig: "COMMANDER",
      name: "DOUGLAS HURLEY",
      desc: "Douglas Gerald Hurley is an American engineer, former MarineCorps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      id: 2,
      desig: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      id: 3,
      desig: "PILOT",
      name: "VICTOR GLOVER",
      desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      id: 4,
      desig: "FLIGHT ENGINEER",
      name: "ANOUSHEH ANSARI",
      desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ],
};

db.tech = {
  index: "03",
  title: "SPACE LAUNCH 101",
  default: 1,
};

export { db };
