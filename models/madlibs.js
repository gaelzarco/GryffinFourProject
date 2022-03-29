const mongoose = require('mongoose')
const {Schema} = mongoose
const Genre = require('./genre.js')

//madlib data schema
const madlibSchema = new Schema({
    name: {
        type: String
        // required: true,
    },
    author: {
        type: String, 
        // required: true,
        default: 'Anonymous'
    },
    genre: {
        type: Schema.Types.ObjectId,
        ref: 'Genre'
    },
    content: {
        type: String
        // required: true,

    },
    
})

const Madlib = mongoose.model('Madlib', madlibSchema)
module.exports = Madlib

