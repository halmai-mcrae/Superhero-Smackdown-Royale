const path = require('path')
const express = require('express')

const heros = require('./routes/superhero-smackdown')

const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/superhero-smackdown', heros)

module.exports = server
