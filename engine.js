import { ENGINE_METHOD_RAND } from "constants";
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

const events = JSON.parse(events_data.toString());
const options = JSON.parse(options_data.toString());

////////////////////////////////////////////////////////////////////////////////////////

async function engine(event_id) {
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

  ''' BASE CASE - ADD if length of options array is 0, then move to end state of game '''

   ''' get character info '''

   // log the event message
  console.log(event[0]);
  await sleep(1000);
  console.log("Do you want to:");

  ''' ADD: reindexing our dictionaries to display options as a,b,c (even if key of option is z) '''
  for (const [key, value] of Object.entries(event_options)) {
    console.log(`${key}: ${value[0]}`);
  }

  // read user Input
  await sleep(1000);
  let chosen_option_id = prompt("Choose your option: ");
  await sleep(3000);
  '''ADD try bit here if input is not an option index'''

  // Rng:
  // use character info to bias Rng
  // do Rng
  // successful = True/False
  // update character

  let successful = true; // our assumption, remove when rng done
  if (successful) {
      //print message for 'successful' event
    console.log(event_options[chosen_option_id][1][1]);
    await sleep(1000);
    console.log(); //new line to split up subsequent events
    //pass the next event into our engine
    engine(event_options[chosen_option_id][1][0]);
    return;
  } else {
      //print message for 'successful' event
    console.log(event_options[chosen_option_id][2][1]);
    await sleep(1000);
    console.log(); //new line to split up subsequent events
    //pass the next event into our engine
    engine(event_options[chosen_option_id][2][0]);
  }
}

engine("river"); //only uses river for now, remove later
