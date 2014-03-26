greet = require "../lib/index"
parseArgs = require "minimist"
agrst = parseArgs process.argv.slice 2
console.log greet agrst._[0],agrst.drunk
