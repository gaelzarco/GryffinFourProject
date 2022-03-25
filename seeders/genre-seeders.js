const db = require('../models')

//to use await, we need an async function
db.Genre.create({
    name: 'Movie Reference'
})
.then(() => {
    console.log('Success')
    process.exit()
})
.catch(err => {
    console.log('Something aint right bruh, this might be it', err)
    proccess.exit()
})