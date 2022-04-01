const db = require('../models')

//to use await, we need an async function
db.Genre.create({

    name: 'Other',
    img: 'https://gryffinfourproj.s3.us-west-1.amazonaws.com/biostatic.jpg'

})
.then(() => {
    console.log('Success')
    process.exit()
})
.catch(err => {
    console.log('Something aint right bruh, this might be it', err)
    proccess.exit()
})