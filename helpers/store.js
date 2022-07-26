const fs = require('fs');
const util = require('util');
const uuid = require('../helpers/uuid');
const noteArray = require('../db/db.json');
const path = require('path');


// const uuid = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read() {
        return readFileAsync('db/db.json','utf8');
    }

    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }

    getNotes() {
        return this.read().then((notes) =>{
            //parse the notes and return them
            let parsedNotes;
            try{
                parsedNotes= [].concat(JSON.parse(notes));
            }
            catch(err){
                parsedNotes=[];
            }
            return parsedNotes;
        })
    }

    addNote(note){
        const {title, text} =note;
        if (!title || !text) {
            throw new Error("no title or text")
        }
        const newNote= {title, text, id: uuid() };
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote);

        //get all notes with getNotes()
        //add new note to them
        //take updated set of notes and write them to file using write()
        //show the new note
        
    }

    removeNote(id) {
        console.log(id);
        //then go through the noted to find the one with the matching id
        for (let i= 0; i< noteArray.length; i++) {
            if (noteArray[i].id == id) {
                noteArray.splice(i, 1);
                console.log("hey");
                break;
            }
        }
    fs.writeFileSync('db/db.json', JSON.stringify(noteArray));    
    //take updated/filtered notes-write them to file usinh write()
    
    
}}

module.exports= new Store();