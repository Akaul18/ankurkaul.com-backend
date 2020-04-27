const express = require('express')
const pro = require('./projects.json');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(pro)
})

module.exports = router;