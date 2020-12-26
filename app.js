const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'example@gmail.com',
    pass: 'get app password from google for gmail'
  }
})

let mailOptions = {
  from: 'example@gmail.com',
  to: 'example@gmail.com',
  subject: 'Nodemailer test',
  text: 'Nodemailer test'
}

transporter.sendMail(mailOptions, (err,data) => {
  if(err) console.error(err)
  else console.log('mail gonderildi')
})
