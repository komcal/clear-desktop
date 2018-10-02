#!/usr/bin/env node
const shell = require("shelljs");

// For future feature, custom folder name structure
// function formatFolder() {}

function leadingZero(num) {
  if (num < 10) {
    return '0' + num;
  }
  return num.toString();
}

shell.cd();
shell.cd('Desktop');

const currTime = new Date();
// Made folder name looks simpler
const folderName = currTime.getFullYear() + '-' + leadingZero(currTime.getMonth() + 1) + '-' + leadingZero(currTime.getDate());

shell.exec('mkdir "' + folderName + '"');
console.log('create folder: ', folderName);

const folderLocation = shell.pwd().toString() + '/' + folderName;

shell.ls('').forEach(function(file) {
  shell.mv(file, folderLocation + '/');
  console.log(file,'has been moved.');
});

shell.echo('move file completed');
shell.exit(1);
