const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const requestIp = require('request-ip')
const moment = require('moment')
// const ipfilter = require('express-ipfilter').IpFilter

// Blacklist the following IPs
// const ips = ['72.143.221.254']

// const path = require('path')
const app = express()
app.use(cors())

// Create the server
// app.use(ipfilter(ips), { mode: 'deny' })

const PORT = process.env.PORT || 5000

app.use(bodyParser.json({ urlencoded: false }))

// app.use('/', express.static(path.join(__dirname, './public')));

// inside middleware handler
const ipMiddleware = function (req, res, next) {
    const clientIp = requestIp.getClientIp(req)

    console.log(
        `${req.method} request for '${req.url}' from ${clientIp} at ${moment()}`
    )
    next()
}

app.use('/api', ipMiddleware, require('./routes'))

app.use((req, res, next) => {
    res.status(404).send('Unknown request')
    next()
})

app.listen(PORT, () => console.log(`listening at port ${PORT}`))
