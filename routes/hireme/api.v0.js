require('dotenv').config()

const nodemailer = require('nodemailer')
const express = require('express')
const util = require('util')
const router = express.Router()

router.post('/', (req, res) => {

    // console.log(req.body)
    const { position, workType, email, description } = req.body
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        // port: 465,
        // secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: "mail from ankurkaul.com",
        html: `<h1>Position: ${position}</h1> 
            <h2>Work type: ${workType}</h2>
            <h2>Email: ${email}</h2>
            <h2>Description of message: ${description}</h2>`
    };

    transporter.sendMail(mailOptions)
        .then(info => {
            res.json({ "response": info.response })
        })
        .catch(err => res.json({ "response": "error occured" }))
})

module.exports = router