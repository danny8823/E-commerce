const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())

app.use('/')

app.listen(process.env.PORT, () => {
    console.log(`Listening to server on port:${process.env.PORT}`)
})