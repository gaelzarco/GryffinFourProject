const express = require('express')
const madlibs = express.Router()
const db = require('../models')


 
//Home page that displays the Genres
madlibs.get('/', (req, res) => {
    db.Genre.find()
    .then(pulledGenre => {
        res.status(200).send(pulledGenre)
    })
    .catch(err => {
        console.log(err)
        res.send('404')
    })
})

//Selected Madlib to read
madlibs.get('/madlib/:madlibId',  (req, res) => {
    db.Madlibs.findById(req.params.madlibId)
    .then( madlib => {
        console.log(madlib)
        res.status(200).json(madlib)
    })
    .catch(err )

})

//Selected Genre and all of its Madlibs
madlibs.get('/:genreId', (req, res) => {
    db.Genre.findById(req.params.genreId)
    .populate('madlibs', 'name author')
    .then(pulledGenre => {
        res.status(200).json(pulledGenre)
    })
    .catch(err => {
        console.log(err)
        res.send('404')
    })
})

madlibs.post("/", (res, req) => {
    db.Madlib.create(req.body)
    .then(() =>{
        res.json({
            message: 'Upload Successful!'
        })
    })
     .catch(err => {
         console.log(err)
         res.json({
             message: '404'
         })
     })   
})





module.exports = madlibs

