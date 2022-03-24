const db = require('../models')

async function seed() {
    //Get the Genre from the Genre Collection in Mongo and assign it a variable
    let genre = await db.Genre.findOne({name: 'Song Reference'})

    // create the Madlib Entry
    let madlib = await db.Madlib.create({
        name: "Something Foreign",
        author: "SiR",
        content: "This is placeholder text to make sure that everything is working as planned for the database"
    })

    //add MAdlib to the category
    genre.madlibs.push(madlib.id)

    //save the genre with the madlib attached
    await genre.save()

    // exit the program
    process.exit()

}

