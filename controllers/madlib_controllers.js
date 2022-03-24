const express = require('express')
const madlibs = express.Router()
 
//Home
madlibs.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the homepage'
    })
})

module.exports = madlibs

