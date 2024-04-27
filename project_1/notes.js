const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return ('Your notes are available.. ')
}

const addNotes =  function(title, body) {
    const data = loadNotes();
    const duplicates = data.filter(function (data) {
        return data.title === title
    });

    if (duplicates.length === 0) {
        data.push({
            title: title,
            body: body
        })
        saveNotes(data);
        console.log('Adding notes');
    } else {
        console.log('Note already added');
    }
}

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



module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes
}; 
