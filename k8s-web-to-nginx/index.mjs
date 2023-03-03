// imports
import express from 'express'
import os from 'os'
import fetch from 'node-fetch'

const app = express()   // create express app
const PORT = 3000   // port where express webserver is running inside container

// endpoints

// route handler for "/" (root url)
app.get("/", (req, res) => {
    const helloMessage = `Hello from the ${os.hostname}`
    console.log(helloMessage)
    res.send(helloMessage)
})

// route handler for "/nginx"
app.get("/nginx", async (req, res) => {
    const url = 'http://nginx'  // service name
    const response = await fetch(url);
    const body = await response.text();
    res.send(body)
})

// start express webserver
app.listen(PORT, () => {
    console.log(`Web server is listening at port ${PORT}`)
})