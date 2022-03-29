const db = require('../models')

async function seed() {
    // create the Madlib Entry
    let madlib = await db.Madlib.create({
        name: "Something Foreign",
        author: "SiR",
        genre: "Horror",
        content: "This is placeholder text to make sure that everything is working as planned for the database"
    })

    //add MAdlib to the category
    db.Madlib.push(madlib.id)

    //save the genre with the madlib attached
    await db.Madlib.save()

    // exit the program
    process.exit()

}


seed()
