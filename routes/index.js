const express = require('express')
const router = express.Router()

router.use('/projects', require('./projects/api.v0'))
router.use('/contact', require('./contact/api.v0'))

module.exports = router