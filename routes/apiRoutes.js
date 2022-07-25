const api = require('express').Router();
//require store from helpers folder
const store = require('../helpers/store');

//GET ALL THE NOTES//
api.get('/notes', (req, res) =>{
    store 
    //getNotes()
    //the take the notes and return them with res.json
})

//POST a new note
api.post('/notes', (req, res) =>{
    store
    //addNote(rq.body)
    //then return note with res.json
})

api.delete('notes/:id', (req, res) => {
    store
    //removeNote(req.params.id)
    //give a status letting you know it's been deleted
})


module.exports = router;