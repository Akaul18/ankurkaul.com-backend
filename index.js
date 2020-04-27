const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json({ urlencoded: false }));

app.use('/api', require('./routes'))

app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    res.status(404).send("Unknown request");
    next();
});


app.listen(PORT, () => console.log(`listening at port ${PORT}`))