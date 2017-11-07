//script to clean files older than 7 days in a directory
const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'seedsData/task2_createOldFiles/files');
const ms1Day = 24 * 60 * 60 * 1000;

const files = fs.readdirSync(dirname);

files.forEach(filename => {
    "use strict";
    const filepath = path.join(dirname, filename);
    fs.stat(filepath, (err, stats) => {
        if (err) throw err;
        if (Date.now() - stats.mtime.getTime() >= 7 * ms1Day) {
            fs.unlink(filepath, (err) => {
                if (err) throw err;
                console.log(`deleted ${filepath}`);
            });
        }
    });
});
