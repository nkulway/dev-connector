const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect database
connectDB()

app.get('/', (req, res) => res.send('API running'))

// look for enviroment variable called port - get port number when deployed
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))