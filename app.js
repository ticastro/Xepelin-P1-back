const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config();

// Middleware
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3000;

// Rutas (corregidas con / al inicio)
app.use('/api/signup', require('./routes/signup'))
app.use('/api/login', require('./routes/login'))
app.use('/api/signout', require('./routes/signout'))
app.use('/api/todos', require('./routes/todos'))
app.use('/api/refreshToken', require('./routes/refreshToken'))
app.use('/api/user', require('./routes/user'))


app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(3002, () => {
    console.log(`Server is running on port ${port}`)
})