#!/usr/bin/env node
var shell = require("shelljs");
shell.cd();
shell.cd('Desktop');

const currTime = new Date();

shell.exec(`mkdir "${currTime}"`);
console.log(`create folder ${currTime}`);

shell.ls('*').map((file) => {
  shell.mv(file, `${currTime}/`);
  console.log(`${file} has been moved.`);
});

shell.echo('move file completed');
shell.exit(1);
