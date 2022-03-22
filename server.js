//Dependencies
const express = require('express')

//Configs and App Initilization
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//Routes
app.get('/', (req, res) => {
    res.send('MadLibbing is on the way! Hold YA horses')
})

app.listen(PORT, () => {
    console.log("Ooh snaps! We're live folks!!")
})