const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json())
app.use(cors())
 

app.put('/registration', (req, res) => {
    const {username, email, password} = req.body

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false, // true for 465, false for other ports
        port: 25,
        auth: {
            user: 'alexhilldev@gmail.com', // generated ethereal user
            pass: 'Fred1015'  // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let HelperOptions = {
        from: '"Fake Email Service" <alexhilldev@gmail.com>',
        to: email,
        subject: 'Thank you for signing up! Here is your info',
        text: `
        Username: ${username} 
        Email: ${email}
        Password: ${password}. 
        This is a fake login, your info will not be stored.`

    }

transporter.sendMail(HelperOptions, (err, info) => {
    if( err){
        return console.log(err)
    } 
    console.log('the message was sent', info)
})
});

app.get('/output/:id', (req, res) => {
    var tommy = function(num){
        var arr = num.toString().split('')
        var answer = arr.map( (e, i, array) => {
        if ( e - array[i+1] > 0){
            var number = array.join('')
            var lol = number - 1
            return tommy(lol)
        } else {
            return array
        }
    })
    return res.status(200).send(answer)
}

tommy(req.params.id)
})

app.get('/getData', (req, res) => {
    let M = req.query.M
    let B = req.query.B
    let x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    var data = x.map((e, i, array) => {
        var mx = M * e
        var test = parseInt(mx) + parseInt(B)
        return {x: e, y: test}
    })
    return res.status(200).send(data)
})



app.listen(4000, console.log('listening on port 4000'))