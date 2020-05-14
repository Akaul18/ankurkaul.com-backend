const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const requestIp = require('request-ip')
const path = require('path')
const app = express();
app.use(cors())

const PORT = process.env.PORT || 5000

app.use(bodyParser.json({ urlencoded: false }));

// app.use('/', express.static(path.join(__dirname, './public')));

// inside middleware handler
const ipMiddleware = function (req, res, next) {
    const clientIp = requestIp.getClientIp(req);
    console.log(clientIp)
    next();
};

app.use('/api', ipMiddleware, require('./routes'))

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    res.status(404).send("Unknown request");
    next();
});


app.listen(PORT, () => console.log(`listening at port ${PORT}`))