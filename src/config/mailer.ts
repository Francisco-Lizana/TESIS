import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "panxo.lizana0@gmail.com", // generated ethereal user
      pass: "fnpanizdmtgjyowk", // generated ethereal password
    },
  });

  transporter.verify().then(()=>{
    console.log('ready for send emails')
  })