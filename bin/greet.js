#!/usr/bin/env node
var greet = require("../lib/index");
var parseArgs = require("minimist");
//console.log(greet(process.argv[2]));
var agrst = parseArgs(process.argv.slice(2));
//console.log(agrs._[0]);
console.log(greet(agrst._[0],agrst.drunk));
