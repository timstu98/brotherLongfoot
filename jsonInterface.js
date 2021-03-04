// const fs = require('fs');
import fs from 'fs';

// const option = 'write';
const option = 'write';

if (option === 'write') {

// create a JSON object
const events = {
    'river':['You arrive at river',['a','b','c']],
    'drown':['You died lol',[]],
    'cross':['You made it across safely. Now you see a ghost ...',['d','e','f']],
    'GAME OVER':['U LOST SUCKA',[]],
};
//Order options // 'id of option':['text',['event id if successful','message if successful'],['event id if unsuccessful','message if unsucccessful']] add upper limit
const options = {
    //river
    'a':["Run away",['GAME OVER','You ran away you massive coward'],['GAME OVER','You ran away you massive coward']],
    'b':['Swim across river',['cross',''],['drown','']],
    'c':['build raft',['cross',''],['drown','']],
    //cross
    'd':["Run away",['GAME OVER','You ran away you massive coward'],['GAME OVER','You ran away you massive coward']],
    'e':["Run away",['GAME OVER','You ran away you massive coward'],['GAME OVER','You ran away you massive coward']],
    'f':["Run away",['GAME OVER','You ran away you massive coward'],['GAME OVER','You ran away you massive coward']],
};

// convert JSON object to string
const data1 = JSON.stringify(events);
const data2 = JSON.stringify(options); 


// write JSON string to a file
fs.writeFile('events.json', data1, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON events data is saved.");
});
fs.writeFile('options.json', data2, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON options data is saved.");
});

}

else if (option==='read') { 
    // read JSON object from file
fs.readFile('events_temp.json', 'utf-8', (err, data) => {
    if (err) {
        throw err;
    }

    // parse JSON object
    const events = JSON.parse(data.toString());

    // print JSON object
    console.log(events);
});
}