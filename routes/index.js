const express = require('express')
const router = express.Router()

router.use('/projects', require('./projects'))
router.use('/contact', require('./contact'))
router.use('/hireme', require('./hireme'))
router.use('/skills', require('./skills'))

module.exports = router