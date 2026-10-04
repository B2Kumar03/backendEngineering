const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

console.log("Node process: ", process.platform);


console.log("CPU",os.cpus().length)