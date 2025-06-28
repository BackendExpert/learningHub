const express = require('express');
const app = express();

const DataRoute = require('./routes/DataRoute');

app.use(express.json()); // <-- Important to parse JSON body

app.use('/data', DataRoute);

app.use('/', (req, res) => {
    res.send("Server is Running on 5000");
});

// For Vercel and local, keep listen (Vercel will ignore port)
app.listen(5000, () => {
    console.log("Server Started on PORT 5000");
});
