const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  try {
    res.json({ statement: 'Welcome to a smashing blast!' })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
