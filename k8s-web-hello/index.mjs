// imports
import express from 'express'
import os from 'os'

const app = express()   // create express app
const PORT = 3000   // port where express webserver is running inside container

// route handler for "/" (root url)
app.get("/", (req, res) => {
    const helloMessage = `VERSION 2 Hello from the ${os.hostname}`
    console.log(helloMessage)
    res.send(helloMessage)
})

// start express webserver
app.listen(PORT, () => {
    console.log(`Web server is listening at port ${PORT}`)
})