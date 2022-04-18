import {Router} from "express";
import nodemailer from "nodemailer";
const router = Router();

const transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bird.skau@gmail.com",
      pass: "Birdskau123",
    },
  });
  
  router.post("/send", (req, res) => {
  
    console.log("Inside send")
  
    const from = req.body.fromEmail;
    const subject = req.body.subject;
    const text = req.body.text;
   
  
    const mailOptions = {
      from: from,
      to: "bird.skau@gmail.com",
      subject: subject,
      text: text,
    };
  
    
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        res.send({message: "mail sent"});
      }
     
    });
  });

  export default router;