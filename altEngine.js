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
  console.log(`
  Health: ${player.health}
  Battle Stat: ${player.meleeStat}
  Trick Stat: ${player.trickStat}
  Distance Stat: ${player.distanceStat}
  `);

  // Filter our Dictionaries to get relevant event info
  let event = events[event_id];

  // log the event message
  await sleep(1000);
  console.log(event.pretext);
  if (event_id == "gameOver" || event_id == "epilogue") return;
  await sleep(1000);
  console.log("Do you want to:");

  console.log(`a: ${event.a.option}`);
  console.log(`b: ${event.b.option}`);
  if (event.c) {
    console.log(`c: ${event.c.option}`);
  }
  // read user Input
  await sleep(1000);
  let selection;
  function promptCheck() {
    let choice = prompt("Choose your option: ");
    if (!event[choice]) {
      console.log("Please choose from the available options!\n");
      return promptCheck();
    }
    return choice;
  }

  selection = promptCheck();

  //await sleep(1000);

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

    if (event[selection].success.message !== "") {
      await sleep(5000); //no delay if no message to display
    }
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
    if (event[selection].success.message !== "") {
      await sleep(5000);
    }

    console.log(); //new line to split up subsequent events
    //pass the next event into our engine
    if (!player.health) {
      engine("gameOver", player);
      return;
    }
    engine(nextEvent, player);
  }
}
