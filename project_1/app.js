// const fs = require('node:fs');
// const add = require('./utils.js');
// const validator = require('validator');
// const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');

// Using yargs to create add command to the add files.
yargs.command({
    command: 'add',
    describe: 'Adding additional note',
    builder: {
        title: {
            describe: 'Cooking Recipe.',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'This is a new recipe and will be added to the recipe list.',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body);
    }
});

// Using Yargs to create 'remove' command to delete files.

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Remove a note',
            demandOption: true,
            typeof: 'string',
        },
    },
    handler: function (argv) {
        notes.removeNotes(argv.title)
    },
});

// Using Yargs to create 'list' command to list files.

yargs.command({
    command: 'list',
    describe: 'List files',
    builder: {
        title: {
            describe: 'List all files',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        notes.listNotes(argv.title)    ;
    }
});

// Using Yargs to create 'read' command to read files.

yargs.command({
    command: 'read',
    describe: 'Read files',
    builder: {
        title: {
            describe: 'Read files',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        notes.readNotes(argv.title);
    }
});

yargs.parse();


















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

