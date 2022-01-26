// Importing required Libraries:
const express = require('express')
const app = express()

const mongoose = require('mongoose')
require('dotenv/config')

const bodyParser = require('body-parser')
const postsRoute = require('./routes/posts')

// Middleware
app.use(bodyParser.json())
app.use('/posts', postsRoute)

// Creating Routes (URLs)
app.get('/', (req, res) => {
    res.send('Homepage')
})

mongoose.connect(process.env.DB_CONNECTOR, () => {
    console.log('DB is now connected!')
})

app.listen(3000, () => {
    console.log('Server is up and running...')
})