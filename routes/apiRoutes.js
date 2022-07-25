const api = require('express').Router();
//if const api doesnt work, do conts router
// const { json } = require('express');
//require store from helpers folder
const store = require('../helpers/store');

//GET ALL THE NOTES//
api.get('/notes', (req, res) =>{
    store 
    .getNotes()
    .then((notes) => {
        return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
    //the take the notes and return them with res.json
});

//POST a new note
api.post('/notes', (req, res) =>{
    store
    .addNote(req.body)
    .then((note) => {
        res.json(note);
    })
    .catch((err) => res.status(500).json(err));
    //addNote(rq.body)
    //then return note with res.json
})

api.delete('notes/:id', (req, res) => {
    store
    removeNote(req.params.id)
    .then(() => res.json({ok:true}))
    
    //give a status letting you know it's been deleted
    .catch((err) => res.status(500).json(err));
})


module.exports = api;