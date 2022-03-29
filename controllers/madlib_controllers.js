const express = require('express')
const madlibs = express.Router()
const db = require('../models')
const Madlib = require('../models/madlibs')
const Genre = require('../models/genre')

 
//Home page that displays the Genres
madlibs.get('/', (req, res) => {
    Genre.find()
    .then(pulledGenre => {
        res.status(200).send(pulledGenre)
    })
    .catch(err => {
        console.log(err)
        res.send('404')
    })
})

//Selected Genre and all of its Madlibs
madlibs.get('/:id', (req, res) => {
    Genre.findById(req.params.id)
    .populate('madlibs', 'name author')
    .then(pulledGenre => {
        res.status(200).json(pulledGenre)
    })
    .catch(err => {
        console.log(err)
        res.send('404')
    })
})

//This Route does not work just yet
// //Selected Madlib to read
// madlibs.get('./:id/:madlibId', (req, res) => {
//     Madlib.findById(req.params.id)
//     .then(selectedMadlib => {
//         res.status(200).json(selectedMadlib)
//     })

// })



module.exports = madlibs

