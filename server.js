const express = require('express')
const cors = require('cors')
const userRoutes = require('./__users/userRoutes')
const server = express()
server.use(express.json())
server.use(cors())

server.use('/api/users', userRoutes)

server.get('/', (req, res)=>{
    res.send(`
        <h1>Welcome to the Api, to Continue Please Log in through the App</h1>
    `)
})

module.exports = server