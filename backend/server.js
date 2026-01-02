// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// require('dotenv').config()


// const app = express();
// app.use(cors({
//   origin: [
//     'http://localhost:3000',
//     'http://localhost:5173',
//     'https://portfolio-pink-two-xpain85uge.vercel.app/'
//   ],
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type']
// }));

// app.use(express.json());

// app.get('/',(req,res) => res.json("The server is working"))
// app.post('/contact',async(req,res) => {
//    const {name,email,message} = req.body;

//    try{
//     const transporter = nodemailer.createTransport({
//         service:'gmail',
//         auth:{
//             user:process.env.MY_EMAIL,
//             pass:process.env.PASSKEY
//         }
//     });

//     const mailOptions = {
//         from:email,
//         to:process.env.MY_EMAIL,
//         subject: `New Contact from ${name}`,
//         text:`You got a message from:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`, 
//     };
    
//     await transporter.sendMail(mailOptions);

//     res.status(200).json({success:true,message:'Message sent successfully'})
//    }
//    catch(error){
//     console.error(error);
//     res.status(500).json({success:false,message:"something went wrong"});
//    }
// });




// app.listen(process.env.PORT || 5000)



const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://portfolio-pink-two-xpain85uge.vercel.app' // ✅ NO trailing slash
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // ✅ HANDLE PREFLIGHT

app.use(express.json());

app.get('/', (req, res) => {
  res.json("The server is working");
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.PASSKEY,
      },
    });

    const mailOptions = {
      from: process.env.MY_EMAIL, // ✅ safer
      replyTo: email,
      to: process.env.MY_EMAIL,
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Something went wrong' });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server running');
});


