const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config()


const app = express();
app.use(cors());
app.use(express.json());


app.post('/contact',async(req,res) => {
   const {name,email,message} = req.body;

   try{
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.MY_EMAIL,
            pass:process.env.PASSKEY
        }
    });

    const mailOptions = {
        from:email,
        to:process.env.MY_EMAIL,
        subject: `New Contact from ${name}`,
        text:`You got a message from:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`, 
    };
    
    await transporter.sendMail(mailOptions);

    res.status(200).json({success:true,message:'Message sent successfully'})
   }
   catch(error){
    console.error(error);
    res.status(500).json({success:false,message:"something went wrong"});
   }
});




app.listen(process.env.PORT,() => {console.log("Server is Running Successfully")})