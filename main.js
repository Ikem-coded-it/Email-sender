const nodemailer = require('nodemailer');


  let transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'ikemefunaonubogu@outlook.com',
      pass: 'IDONTknow2'
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