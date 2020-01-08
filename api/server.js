const express = require('express')
const helmet = require('helmet')
// const cors = require('cors')
const server = express()

const authRouter = require('../auth/auth-router.js')
const chefsRouter = require('../chefs/chefs-router.js')
const recipesRouter = require('../recipes/recipes-router.js')

server.use(helmet())
server.use(express.json())
// server.use(cors())
server.use(logger)

server.use('/auth', authRouter)
server.use('/chefs', chefsRouter)
server.use('/recipes', recipesRouter)

function logger(req, res, next) {
  const method = req.method
  const url = req.url
  const timestamp = Date.now()
  console.log(`${method} request to ${url} at ${timestamp}`)
  next()
}

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Server is up.' })
})

module.exports = server
