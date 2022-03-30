const db = require('../models')

async function seed() {
    // create the Madlib Entry
    let madlib = await db.Madlib.create({
        name: "Something Foreign",
        author: "SiR",
        genre: "Horror",
    })
    //add MAdlib to the category
    db.Madlib.push(madlib.id)

    //save the genre with the madlib attached
    await db.Madlib.save()

    // exit the program
    process.exit()

}


seed()
