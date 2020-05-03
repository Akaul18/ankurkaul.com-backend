require('dotenv').config()

const nodemailer = require('nodemailer')
const express = require('express')
const router = express.Router()
// const { email, password } = require('../../config/gmailConfig')

router.post('/', (req, res) => {

    // console.log(req.body)
    const { name, company, email, contactNumber, message } = req.body
    console.log(email, message)
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
        text: `<h1>Name: ${name}</h1> 
                <h2>Company: ${company}</h2>
                <h2>email: ${email}</h2>
                <h2>Contact number: ${contactNumber}</h2>
                <h2>message: ${message}</h2>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("error occurs", error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        res.json({ "response": info })
    });
})

module.exports = router