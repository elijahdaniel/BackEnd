const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('../auth/auth-router.js')
const usersRouter = require('../users/users-router.js')
const postsRouter = require('../posts/posts-router.js')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/auth', authRouter)
server.use('/users', usersRouter)
server.use('/post', postsRouter)

server.get('/', (req, res) => res.send({ server: 'is up' }))

module.exports = server
