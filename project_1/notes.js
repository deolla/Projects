const fs = require('fs');
const chalk = require('chalk');

const addNotes =  function(title, body) {
    const data = loadNotes();
    // const dup = data.filter((data) => data.title === title);
    const dulNote = data.find((data) => data.title === title);

    if (!dulNote) {
        data.push({
            title: title,
            body: body
        })
        saveNotes(data);
        console.log(chalk.green.inverse('Adding notes'));
    } else {
        console.log(chalk.red.inverse('Note title taken'));
    }
}

const readNotes = (title) => {
    const notes = loadNotes();
    const data = notes.find((note) => note.title === title);
    if (data) {
        console.log('[{', chalk.blue.inverse(data.title),':', chalk.green(data.body), '}]');
    } else {
        console.log(chalk.red.inverse('No notes found!'));}
};

/*
const readNotes = () => {
    const notes = loadNotes();
    notes.forEach(function (note) {
        if (note) {
            console.log('[{', chalk.blue.inverse(note.title),':', chalk.green(note.body), '}]');
        } else {
            console.log(chalk.red.inverse('No notes found!'));
        }
    })
};
*/

const saveNotes = function(data) {
    const notes = JSON.stringify(data);

    fs.writeFileSync('notes.json', notes)
}

const loadNotes = function() {
    try {
        const bufferData = fs.readFileSync('notes.json');
        const jsonData = bufferData.toString();
        return JSON.parse(jsonData);
    } catch (e) {
        return [];
    }   
}

const removeNotes = function(title) {
    const data = loadNotes();
    const notes = data.filter(function (note) {
        return note.title !== title
    })
    if (notes.length < data.length) {
        console.log(chalk.green.inverse('Note removed!'));
    } else {
        console.log(chalk.red.inverse('No notes found!'));
    }
   const m =  saveNotes(notes);
}

const listNotes = () => {
    const data = loadNotes();
    data.forEach((note) => {
        console.log(chalk.bgGreen.black(note.title));
    });
}


module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}; 
