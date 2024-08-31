const express = require('express')
const router = require('./routes/userRoutes')
const app = express();
const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('DATABASE CONNECTED')
}).catch((error)=>{
    console.log('ERROR:',error.message)
})

app.use(express.json())

app.use('/', router)

app.listen(process.env.PORT, () => {
    console.log(`Listening to server on port:${process.env.PORT}`)
})