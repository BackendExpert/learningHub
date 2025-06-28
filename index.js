const express = require('express')
const app = express()

const DataRoute = require('./routes/DataRoute')

app.use('/data', DataRoute)

app.use('/', (req, res) => {
    res.send("Server is Running on 5000")
})


module.exports = app;