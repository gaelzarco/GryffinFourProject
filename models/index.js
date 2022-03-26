require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Data sittin' at" , process.env.MONGO_URI)
})

module.exports.Genre = require('./genre')
module.exports.Madlib = require('./madlibs') 