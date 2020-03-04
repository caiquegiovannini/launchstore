const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e0b9f560d8d033",
      pass: "8378258285a9b7"
    }
  });