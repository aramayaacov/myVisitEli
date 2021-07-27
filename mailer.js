module.exports = function (msg) { 
require('dotenv').config()
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.USERMAIL,
    pass: process.env.PMAIL,
  },
});

if(transporter.verify().then(console.log).catch(console.error)) {
    transporter.sendMail({
  from: 'eliyahou.arama@gmail.com', // sender address
  to: "eliyahou.arama@gmail.com, eli@assistance-retraite.net", // list of receivers
  subject: "מבחן נווט חופי פנוי", // Subject line
  html: "<b> נא לבדוק את האתר לקבוע מבחן </b>" , // html body
}).then(info => {
  console.log({info});
}).catch(console.error);
}
};