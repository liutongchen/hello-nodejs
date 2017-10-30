//Watch a directory and report 3 events: add, remove
const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, '/seedsData/task3_watchFiles');
const currentFiles = fs.readdirSync(dirname);

const logWithTime = message => {
    "use strict";
    console.log(`${new Date().toUTCString()}: ${message}`);
};

fs.watch(dirname, (eventType, filename) => {
    "use strict";
    if (eventType === 'rename') { //add or delete
        const index = currentFiles.indexOf(filename);
        if (index >= 0) {
            currentFiles.splice(index, 1);
            logWithTime(`${filename} is removed`);
            return;
        } else {
            currentFiles.push(filename);
            logWithTime(`${filename} is added`);
            return;
        }
    }
});