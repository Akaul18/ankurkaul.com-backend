const express = require('express')
const router = express.Router();

router.use('/projects', require('./projects/api.v0'));

module.exports = router;