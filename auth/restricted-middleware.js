const jwt = require('jsonwebtoken')
const secrets = require('../secrets.js')

module.exports = (req, res, next) => {
  const token = req.headers.authorization
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'Invalid Token' })
      } else {
        req.user = { username: decodedToken.username }
        next()
      }
    })
  } else {
    res.status(400).json({ error: 'A Token was Not Provided' })
  }
}
