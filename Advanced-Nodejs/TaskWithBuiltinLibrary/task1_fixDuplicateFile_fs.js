//TASK: Script to fix files in a directory. Each file has its data duplicated. Truncate each file in half.
const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'seedsData/task1_duplicateCode');

const files = fs.readdirSync(dirname);

files.forEach(filename => {
    "use strict";
    const filepath = path.join(dirname, filename);
    fs.stat(filepath, (err, stats) => {
        if (err) throw err;
        fs.truncate(filepath, Math.round(stats.size/2), (err) => {
            if (err) throw err;
        });
    });
});