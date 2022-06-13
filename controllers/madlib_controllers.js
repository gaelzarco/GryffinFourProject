const express = require('express')
const madlibs = express.Router()
const db = require('../models')

//Home page that displays the Genres
madlibs.get('/', (req, res) => {
    db.Genre.find()
    .populate('madlibs', 'name')
    .then(genre => {
        res.status(200).json(genre)
    })
    .catch(err => {
        console.log('this is what the problem could be', err)
        res.json ({
            message: 'home page 404'
        })
    })
})

//Selected Madlib to read
madlibs.get('/:madlibId', (req, res) => {
    db.Madlib.findById(req.params.madlibId)
    .then(madlib => {
        res.status(200).json(madlib)
    })
    .catch(err => {
        console.log('This is what the problem could be', err)
        res.json({
            message: 'madlib read route'
        })
    })

})

//Selected Genre and all of its Madlibs
madlibs.get('/:genreId', (req, res) => {
    db.Genre.findById(req.params.genreId)
    .populate('madlibs')
    .then(pulledGenre => {
        res.status(200).json(pulledGenre)
    })
    .catch(err => {
        console.log(err)
        res.json({
            message: 'genre id route'
        })
    })
})

//New madlib Submission form
madlibs.post("/", (req, res) => {
    console.log(req.body)

    db.Madlib.create(req.body)
    .then(() =>{
        res.json({
            message: 'Upload Successful!'
        })
    })
    .catch(err => {
         console.log('This is what the problem could be', err)
         res.json({
             message: 'post route'
         })
     })   
})


//Delete a Madlib
madlibs.delete('/madlib/:madlibId', (req, res) => {
    db.Madlib.findByIdAndDelete(req.params.madlibId)
    .then(deletedMadlib => {
        console.log(deletedMadlib)
        res.json({
            message: "Successfully Deleted"
        })
    })
    .catch(err => {
        console.log('This is what the problem might be', err)
        res.json({
            message: 'A Problem has occured'
        })
    })
})

module.exports = madlibs