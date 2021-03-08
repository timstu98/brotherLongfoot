// const fs = require('fs');
import fs from "fs";

// const option = 'write';
const option = "write";

// if (option === "write") {
// create a JSON object
export const events = {
  mainEvent1: [
    "The meandering trail through the woods leads to a cavern, a large troll stands guard at its mouth. It stares at you stupidly.”",
    ["a", "b", "c"],
  ],
  drown: ["You died lol", []],
  cross: [
    "You made it across safely. Now you see a ghost ...",
    ["d", "e", "f"],
  ],
  "GAME OVER": ["U LOST SUCKA", []],
  chooseCorridor: [
    "The winding corridors of the cave split into three, which passage do you take?",
    ["d", "e", "f"],
  ],
  leftCorridor: [
    "You find a helpless looking goblin in the passage, it explains that it has tried reinstalling and installing NPM four times but it’s still not working.",
    [],
  ],
  middleCorridor: [
    "Sitting in a dingy, poorly lit corner a goblin challenges you to a game of tic-tac-toe",
    [],
  ],
  rightCorridor: ["PLACEHOLDER", []],
};

//Order options // 'id of option':['text',['event id if successful','message if successful'],['event id if unsuccessful','message if unsucccessful']] add upper limit
export const options = {
  //river
  a: [
    "Convince the troll to arm-wrestle you for entry.",
    [
      "chooseCorridor",
      "You win the bout; the troll states its intent to write a scathing tweet about you before leaving.",
    ],
    [
      "GAME OVER",
      "Your arm is broken; you return home in shame, the troll’s hastily scrawled recommendation for a physio your only prize.",
    ],
  ],
  b: [
    "Shoot the troll with your bow.",
    [
      "chooseCorridor",
      "You hit the troll in one of its eyes. Not wanting to lose the other three, it retreats into the woods.",
    ],
    [
      "GAME OVER",
      "You miss. The troll is angry and threatens to call the neighbourhood watch. You leave before things escalate, and return home in shame.",
    ],
  ],
  c: [
    "Use magic to teach the troll etiquette.",
    [
      "chooseCorridor",
      "The troll hands you a business card, then grants you entry.",
    ],
    [
      "GAME OVER",
      "You mis-cast the spell, and teach the troll too much etiquette. It is now challenging you to a duel. You return home in shame.",
    ],
  ],
  //cross
  d: ["Left passage.", ["leftCorridor", ""], ["leftCorridor", ""]],
  e: ["Middle passage.", ["middleCorridor", ""], ["middleCorridor", ""]],
  f: ["Right passage.", ["rightCorridor", ""], ["rightCorridor", ""]],
};

// // convert JSON object to string
// const data1 = JSON.stringify(events);
// const data2 = JSON.stringify(options);

// // write JSON string to a file
// fs.writeFile("events.json", data1, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("JSON events data is saved.");
// });
// fs.writeFile("options.json", data2, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("JSON options data is saved.");
// });
// } else if (option === "read") {
//   // read JSON object from file
//   fs.readFile("events_temp.json", "utf-8", (err, data) => {
//     if (err) {
//       throw err;
//     }

//     // parse JSON object
//     const events = JSON.parse(data.toString());

//     // print JSON object
//     console.log(events);
//   });
// }
