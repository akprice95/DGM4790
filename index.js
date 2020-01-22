const express = require('express');

const testRoute =require('./routes/test.route');

const app = express()

app.use('/', testRoute)
// app.use('/api', function(req, res, next) {
//     console.log(req)
// console.log(`A new request was recieved at ${new date().toLocalString()}`)
//  res.send('thanks for hitting my api')
// })


const port = 5000

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})
