import { ENGINE_METHOD_RAND } from "constants";
import { events, options } from "./jsonInterface.js";
import fs from "fs";
import _ from "lodash";
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

////////////////////////////////////////////////////////////////////////////////////////

// read JSON object from file
const events_data = fs.readFileSync("events.json", "utf-8", (err, data) => {
  if (err) {
    throw err;
    console.log("error");
  }
});

const options_data = fs.readFileSync("options.json", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
});

// const events = JSON.parse(events_data.toString());
// const options = JSON.parse(options_data.toString());

////////////////////////////////////////////////////////////////////////////////////////

export async function engine(event_id, player) {
  console.log(`Health: ${player.health}`);
  console.log(`Battle Stat: ${player.meleeStat}`);
  console.log(`Trick Stat: ${player.trickStat}`);
  console.log(`Distance Stat: ${player.distanceStat}`);

  // Filter our Dictionaries to get relevant event info
  let event = events[event_id];
  let event_options_id = event[1];

  // Get relevant options for event
  const event_options = Object.keys(options)
    .filter((key) => event_options_id.includes(key))
    .reduce((obj, key) => {
      obj[key] = options[key];
      return obj;
    }, {});

  // BASE CASE - ADD if length of options array is 0, then move to end state of game '''

  // get character info

  // log the event message
  console.log(event[0]);
  await sleep(1000);
  console.log("Do you want to:");

  // ADD: reindexing our dictionaries to display options as a,b,c (even if key of option is z) '''
  /*for (const [key, value] of Object.entries(event_options)) {
    console.log(`${key}: ${value[0]}`);
  }*/
  for (const [key, value] of Object.entries(event_options)) {
    console.log(`${key}: ${value[0]}`);
  }
  // read user Input
  await sleep(1000);
  let chosen_option_id = prompt("Choose your option: ");
  if (!Object.keys(event_options).includes(chosen_option_id)) {
    console.log("Bad Input \n Try again \n");
    return engine("CURRENT EVENT");
  }

  await sleep(3000);

  // Rng: Read Type of Event, take relevant scaled values from characters, weigh against rng.
  // let power;
  // if(/* Event option tag */ true) {
  //   power = 50/* character.meleeStat */
  // }
  // else if(/* Event option tag */true) {
  //   power = 50/* character.trickStat */
  // }
  // else if(/* Event option tag */true) {
  //   power = 50/* character.trickStat */
  // }

  // power = x*Trick + y*BattleStat + z*Distance where a,b,c are event/object specific multipliers.
  // if power > Math.floor(Math.random()*eventCeiling): success
  let successful;
  if (player.meleeStat > Math.floor(Math.random() * 100)) {
    successful = true;
  } else {
    successful = false;
  }
  //
  // do Rng
  // successful = True/False
  // update character

  player.takeDamage(10);

  // let successful = true; // our assumption, remove when rng done
  if (successful) {
    //print message for 'successful' event
    console.log(event_options[chosen_option_id][1][1]);
    await sleep(1000);
    console.log(); //new line to split up subsequent events
    //pass the next event into our engine
    engine(event_options[chosen_option_id][1][0], player);
    return;
  } else {
    //print message for 'successful' event
    console.log(event_options[chosen_option_id][2][1]);
    await sleep(1000);
    /* character.takeDamage(10) */
    /* character.increaseStrength(10) */
    console.log(); //new line to split up subsequent events
    //pass the next event into our engine
    engine(event_options[chosen_option_id][2][0], player);
  }
}

// engine("mainEvent1",); //only uses river for now, remove later
