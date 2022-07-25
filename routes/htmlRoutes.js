//require paths
//require express
const path = require('path');
const api = require('express').Router();

//routes for /notes that responds to notes.html file
api.get('/notes', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public/notes.html'));
});

api.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public/index.html'));
});

//for other routes using * as path, youcan respond with theindex.html file

module.exports = api;