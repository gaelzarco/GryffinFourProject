const mongoose = require('mongoose')
const {Schema} = mongoose

//Genre Schema
const genreSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Horror', 'Fantasy', 'Positive Mental Health', 'Historical', 'Movie Referece', 'Song Reference', 'Other' ]
    },
    
}, {toJSON: { virtuals: true }})

//Virtuals aka child association
genreSchema.virtual('madlibs', {
    ref: 'Madlib',
    localField: '_id',
    foreignfield: 'genre'

})

//model and Exports
const Genre = mongoose.model('Genre', genreSchema)
module.exports = Genre
