const nodemailer = require("nodemailer");

//  transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  //host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  pool: true,
  auth: {
    user: "projectvecrosoft@gmail.com",
    pass: "qaji cfrr fkbl gspz",
  },
});

//  email sending function
const sendEmail = async (to, subject, text, html) => {
  const mailOptions = {
    from: "projectvecrosoft@gmail.com",
    to,
    subject,
    text,
    html,
  };
  console.log("here 1");

  try {
    const info = await transporter.sendMail(mailOptions);
   // console.log("Email sent: " + info.response);
  } catch (error) {
    //console.error("Error sending email: ", error);
  }
};

//sendEmail('giridipak743@gmail.com', 'Test Subject', 'Test email body', '<a href="WWW.facebook.com">Test email body</a>');

module.exports = sendEmail;
