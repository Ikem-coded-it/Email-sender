const nodemailer = require('nodemailer');


  let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  });
  
  
  let mailOptions = {
    from: 'ikemefunaonubogu@outlook.com',
    to: 'ikemefunaonubogu@gmail.com',
    subject: 'ZURI Email Sender Project',
    text: 'Hi from your Email Sender project'
  };
  
  
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log('sent: ', data.response);
    }
  });