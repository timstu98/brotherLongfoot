// const fs = require('fs');
import fs from 'fs';

// const option = 'write';
const option = 'read';

if (option === 'write') {

// create a JSON object
const events = {
    "id": 1,
    "name": "John Doe",
    "age": 22
};

// convert JSON object to string
const data = JSON.stringify(events);

// write JSON string to a file
fs.writeFile('events_temp.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
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