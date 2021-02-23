/**
 * references docs https://documentation.mailgun.com/en/latest/user_manual.html#sending-via-api
 * @param {object} opt 
 */
import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

// const sendEmail = opt => {
//   const apiKey = process.env.SMTP_API_KEY;
//   const domain = process.env.SMTP_DOMAIN;
//   const mailgun = require('mailgun-js')({ apiKey, domain });

//   console.log(apiKey, domain);

//   const data = {
//     from: 'Okedok <noreply@okedok.co.id>',
//     to: opt.email,
//     subject: opt.subject
//   };

//   if ('text' in opt) {
//     data.text = opt.text;
//   } else if ('html' in opt) {
//     data.html = opt.html
//   }
//   console.log(data);

//   mailgun.messages().send(data, (err, body) => {
//     if (err) throw err;
//     console.log(body);
//   });
// };

const sendEmail = opt => {
  const apiKey = process.env.SMTP_API_KEY;
  const domain = process.env.SMTP_DOMAIN;

  const message = {
    from: 'OKEDOK <noreply@okedok.co.id>',
    to: opt.email,
    subject: opt.subject,
    text: opt.text
  };


}

sendEmail({ email: 'pratamautama163@gmail.com', subject: 'Verifikasi Email Anda', text: 'this is dummy text for testing email.' });

module.exports = sendEmail