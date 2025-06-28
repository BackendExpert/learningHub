const express = require('express')
const app = express()
const APIRoute = require('./routes/DataRoute')

app.use('/api', APIRoute)

app.use('/', (req, res) => {
    res.send("Server is Running on 5000")
})


app.listen(5000, console.log("Server Started on PORT 5000"))