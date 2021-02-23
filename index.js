const path = require('path');
global.appRoot = path.resolve(__dirname);

require = require("esm")(module)
module.exports = require('./src/bin/server');