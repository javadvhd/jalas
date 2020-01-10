const nodemailer = require('nodemailer')

// async..await is not allowed in global scope, must use a wrapper
exports.mailSender = async function main({ from, to, subject, body }) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  const account = {
    user: 'jalas.bhb@gmail.com',
    pass: 'bhbjalasbhb',
  }

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: account,
  })

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: account.user,
    to,
    subject,
    text: body,
  })

  console.log('Message sent: %s', info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
