import { ENGINE_METHOD_RAND } from "constants";
import { events } from "./altInterface.js";
import fs from "fs";
import _ from "lodash";
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function engine(event_id, player) {
  console.log(`Health: ${player.health}`);
  console.log(`Battle Stat: ${player.meleeStat}`);
  console.log(`Trick Stat: ${player.trickStat}`);
  console.log(`Distance Stat: ${player.distanceStat}`);

  // Filter our Dictionaries to get relevant event info
  let event = events[event_id];

  // BASE CASE - ADD if length of options array is 0, then move to end state of game '''

  // get character info

  // log the event message
  console.log(event.pretext);
  await sleep(1000);
  console.log("Do you want to:");

  // ADD: reindexing our dictionaries to display options as a,b,c (even if key of option is z) '''

  console.log(`a: ${event.a.option}`);
  console.log(`b: ${event.b.option}`);
  if (event.c) {
    console.log(`c: ${event.c.option}`);
  }
  // read user Input
  await sleep(1000);
  let selection = prompt("Choose your option: ");
  // if (!Object.keys(event_options).includes(selection)) {
  //   console.log("Bad Input \n Try again \n");
  //   return engine("CURRENT EVENT");
  // }

  await sleep(3000);

  // Rng: Read Type of Event, take relevant scaled values from characters, weigh against rng.
  let chance;

  switch (event[selection].trait) {
    case "luck":
      chance = player.trickStat;
      break;
    case "melee":
      chance = player.meleeStat;
      break;
    case "distance":
      chance = player.distanceStat;
      break;
    case "guaranteed":
      chance = 100;
      break;
    case "magic":
      if (player.magic) {
        chance = 80;
      } else {
        chance = 0;
        console.log("You're not magical!");
      }
      break;
    default:
      chance = 50;
  }

  let successful = chance >= Math.floor(Math.random() * 100) ? true : false;

  //
  // do Rng
  // successful = True/False
  // update character

  // let successful = true; // our assumption, remove when rng done
  if (successful) {
    let success = event[selection].success;
    const { message, nextEvent } = success;
    //print message for 'successful' event
    console.log(message);
    switch (true) {
      case !!success.increaseLuck:
        player.increaseLuck(success.increaseLuck);
        break;
      case !!success.increaseHealth:
        player.increaseHealth(success.increaseHealth);
        break;
      case !!success.increaseStrength:
        player.increaseStrength(success.increaseStrength);
        break;
      case !!success.increaseRange:
        player.increaseRange(success.increaseRange);
        break;
      default:
        break;
    }
    await sleep(1000);
    console.log(); //new line to split up subsequent events

    //pass the next event into our engine
    engine(nextEvent, player);
    return;
  } else {
    let failure = event[selection].failure;
    const { message, nextEvent } = failure;
    //print message for 'successful' event
    console.log(message);
    switch (true) {
      case !!failure.decreaseLuck:
        player.decreaseLuck(failure.decreaseLuck);
        break;
      case !!failure.takeDamage:
        player.takeDamage(failure.takeDamage);
        break;
      case !!failure.decreaseStrength:
        player.decreaseStrength(failure.decreaseStrength);
        break;
      case !!failure.decreaseRange:
        player.decreaseRange(failure.decreaseRange);
        break;
      default:
        break;
    }
    await sleep(1000);

    console.log(); //new line to split up subsequent events
    //pass the next event into our engine
    if (!player.health) {
      console.log("YOU DIED \nGAME OVER");
      return;
    }
    engine(nextEvent, player);
  }
}

// engine("mainEvent0"); //only uses river for now, remove later
