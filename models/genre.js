const mongoose = require('mongoose')
const {Schema} = mongoose
const Madlib = require('./madlibs')

//Genre Schema
const genreSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Horror', 'Fantasy', 'Positive Mental Health', 'Historical', 'Movie Reference', 'Song Reference', 'Other' ]
    },
    //madlibs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Madlib'}]
    
}, {toJSON: { virtuals: true }})

//Virtuals: this is information that shows madlib is a related property of the genre table but will not be explicitly recorded in mongodb. I believe this is currently conflicting with the child schema

genreSchema.virtual('madlibs', {
    ref: 'Madlib',
    localField: '_id',
    foreignField: 'genre'
})

//model and Exports
const Genre = mongoose.model('Genre', genreSchema)
module.exports = Genre
