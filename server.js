//Dependencies
const express = require('express')
const path = require('path')


//Configs and App Initilization
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(express.urlencoded({extended: true}))


app.use(express.static(path.resolve(__dirname, '../client/build')))

//Routes start
app.get('/api', (req, res) => {
    res.json({
        message: 'GryffinFOUR BACKEND IS SUCCESSFULLY CONNECTED',
    })
})

//Madlibs Controller
const madlibsController = require('./controllers/madlib_controllers')
app.use('/madlibs', madlibsController)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})



// Port to listen on
app.listen(PORT, () => {
    console.log(`Ooh snaps! We're live on port ${PORT} folks!!`)
})