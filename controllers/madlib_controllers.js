const express = require('express')
const madlibs = express.Router()
const db = require('../models')
const Madlib = require('../models/madlibs')
const Genre = require('../models/genre')
const madlibSeedData = require('../seeders/madlib-seeders')
 
//Home
madlibs.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the homepage'
    })
})

//Category View
madlibs.get('/', (req, res) => {
   
})

module.exports = madlibs

