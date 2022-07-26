const fs = require('fs');
const util = require('util');
const uuid = require('../helpers/uuid');
const noteArray = require('../db/db.json');


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
        //console log not working
        getNotes(notes)
        for (let i= 0; i< noteArray.length; i++) {
            if (noteArray[i].id == req.params.id) {
                noteArray.spliced(i, 1);
                console.log("hey");
                //console log not working
                break;
            }
        }
    let jsonFilePath = path.join(__dirname,"/db/db.json");
    fs.writeFileSync(jsonFilePath, JSON.stringify(noteArray), function (err){
        if (err){
            return console.log(err);
        } else {
            console.log("your note was deleted"); 
        }
    }
        //get all the notes from getNotes()
        //then go through the noted to find the one with the matching id
        //take updated/filtered notes-write them to file usinh write()
    )
    res.json(noteArray);
}}

module.exports= new Store();