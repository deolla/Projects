// const fs = require('node:fs');
// const add = require('./utils.js');
const notes = require('./notes.js');
// const validator = require('validator')
const chalk = require('chalk');
const yargs = require('yargs');

// write data to a file, replace existing date in the file and creating the file if it does not yet exis.
// fs.writeFileSync('notes.txt', 'My boss explained that it is either this or that. The 512GB  is also included in the options provided in the link.')

// Add data to an existing file, creating the file if it does not yet exist. 
// fs.appendFileSync('notes.txt', '\nAnd it’s compatible with your PC')

//  const sum = add(4, 6);
//  console.log(sum);

//  const note = notes();
//  console.log(note);

// console.log(validator.isEmail('test@example.com'));
// console.log(validator.isURL('http://example.com'));

// console.log(chalk.green('Success!'));
// console.log(chalk.yellow(validator.isURL('http://example.com')));
// console.log(chalk.red('Hello!'))

// console.log(chalk.green.bold('Success' + chalk.underline.cyan('full ') + chalk.magenta.inverse.italic('Oluwaseyi!')));
// console.log(chalk.bold.green('Hello!'));

// console.log(chalk.green(process.argv));

// customize yargs version
yargs.version('1.1.0')


// Using yargs to add command to the add files.

yargs.command({
    command: 'add',
    describe: 'Adding additional note',
    handler: function () {
        console.log('Added a new note');
    }
});

// Using Yargs to add 'remove' command to delete files.

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function () {
        console.log('Removed a note');
    },
});

// Using Yargs to add 'list' command to list files.

yargs.command({
    command: 'list',
    describe: 'List files',
    handler: function () {
        console.log('List files');
    }
});

// Using Yargs to add 'read' command to read files.

yargs.command({
    command: 'read',
    describe: 'Read files',
    handler: function () {
        console.log('Read files');
    }
});

console.log(yargs.argv);