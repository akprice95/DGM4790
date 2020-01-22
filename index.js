const express = require('express');

const testRoute =require('./routes/test.route');

const app = express()

app.use('/', testRoute)
app.use('/', function(req, res, next) {
    console.log(req);
    console.log(`A new request was received at ${new Date()
        .toLocaleString()}`)
        res.send(`<h1>Thanks for hitting my page</h1>`)
}) 


const port = 5000

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})
