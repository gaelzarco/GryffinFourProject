//Dependencies
const express = require('express')
const mongoose = require('mongoose')

//Configs and App Initilization
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//MiddleWare
mongoose.connect(process.env.Mongo_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Data sittin' at" , process.env.Mongo_URI)
})



//Routes
app.get('/api', (req, res) => {
    res.json({
        message: 'GryffinFOUR BACKEND IS SUCCESSFULLY CONNECTED',
    })
})

//Madlibs Controller
const madlibsController = require('./controllers/madlib_controllers')
app.use('/madlibs', madlibsController)


// Port to listen on
app.listen(PORT, () => {
    console.log(`Ooh snaps! We're live on port ${PORT} folks!!`)
})