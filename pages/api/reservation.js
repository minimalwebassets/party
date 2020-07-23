/* eslint-disable no-console */

require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  try {
    // Create a SMTP transporter object
    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.eu',
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER_EMAIL,
        pass: process.env.ZOHO_PASS,
      },
    });
    const body = JSON.parse(event.body);
    const info = await transporter.sendMail({
      from: process.env.ZOHO_USER_EMAIL,
      to: process.env.ZOHO_USER_EMAIL,
      subject: 'Reservation Request',
      text: `${body.name}/nDate: ${body.date}/nTime: ${body.time}/nGroup Size: ${body.groupSize}/nMessage: ${body.message}`,
      replyTo: body.email,
    });
    console.log(info);
    return { statusCode: 200, body: JSON.stringify(info) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: err };
  }
};
