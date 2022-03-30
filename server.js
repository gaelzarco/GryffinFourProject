//Dependencies
const express = require('express')


//Configs and App Initilization
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(express.urlencoded({extended: true}))

//Routes
app.get('/api', (req, res) => {
    res.json({
        message: 'GryffinFOUR BACKEND IS SUCCESSFULLY CONNECTED',
    })
})

//Madlibs Controller
const madlibsController = require('./controllers/madlib_controllers')
app.use('/madlibs', madlibsController)

app.get('*', (req, res) => {
    res.status(404).json({
        message: '404'
    })
})



// Port to listen on
app.listen(PORT, () => {
    console.log(`Ooh snaps! We're live on port ${PORT} folks!!`)
})