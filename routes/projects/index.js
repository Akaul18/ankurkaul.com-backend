const express = require('express')
const projects = require('./projects.json')
const router = express.Router();

router.get('/', (req, res) => {
    res.json(projects)
})

module.exports = router;