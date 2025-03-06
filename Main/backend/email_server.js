const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // To parse JSON data from the request body
app.use(bodyParser.json());
console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass:", process.env.EMAIL_PASS);

// Email setup using Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,   // Your Gmail email (use an app password)
    pass: process.env.EMAIL_PASS    // Your Gmail app password
  }
});

// POST route to handle sending email
app.post('/send-email', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Check if the required fields are present
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Set up the mail options
  const mailOptions = {
    from: 'noreply@ronniesmitheyfinancial.com',  // Default "from" email (no-reply)
    replyTo: email,  // The user's email (for the reply)
    to: '#', // Recipient email (Ronnie's email)
    subject: `Contact Form Message from ${name}`,
    text: `
    You have a new message from the contact form:
    
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}
    `,
    html: `
    <h3>You have a new message from the contact form:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
    `
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully!' });
  });
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});