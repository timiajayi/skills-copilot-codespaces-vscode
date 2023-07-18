// create web server
// 1. import express
const express = require('express')
// 2. create web server object
const app = express()
// 3. specify the port to listen to
app.listen(3000, () => {
    console.log('server running at http://localhost:3000') // this is a callback function
})

 