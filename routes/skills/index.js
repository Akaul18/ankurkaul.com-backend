const express = require('express')
const skills = require('./skills.json')
const router = express.Router();

router.get('/', (req, res) => {
    res.json(skills)
})

module.exports = router;