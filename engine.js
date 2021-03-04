import { ENGINE_METHOD_RAND } from 'constants';
import fs from 'fs';
import _ from 'lodash'
    
////////////////////////////////////////////////////////////////////////////////////////

// read JSON object from file
const events_data = fs.readFileSync('events.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
        console.log('error');
    }
});

const options_data = fs.readFileSync('options.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }
});

const events = JSON.parse(events_data.toString());
const options = JSON.parse(options_data.toString());

////////////////////////////////////////////////////////////////////////////////////////

function engine(event_id) {

    let event = events[event_id];
    let event_options_id = event[1];
    console.log(event_options_id);

    const event_options = Object.keys(options)
    .filter(key => event_options_id.includes(key))
    .reduce((obj, key) => {
        obj[key] = options[key];
        return obj;
    }, {});

    // console.log(event_options);

    // get character info

    console.log(event[0])
    // display event Message
    // display options
    // read user Input

    // Rng:
    // use character info to bias Rng
    // do Rng
    // next_event = outcome

    // display option outcome
    // update character

    // if (next_event_id) {
    //     engine(next_event_id);
    // }
    // else {
    //     console.log('Done!')
    // }
}

engine('river')