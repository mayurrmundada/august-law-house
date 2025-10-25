require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Ensure required env variables
if (!process.env.SENDGRID_API_KEY || !process.env.FROM_EMAIL || !process.env.TO_EMAIL) {
  console.warn('Warning: Please set SENDGRID_API_KEY, FROM_EMAIL, and TO_EMAIL in environment variables');
}

// SendGrid transporter
const transporter = nodemailer.createTransport(
  sgTransport({
    auth: { api_key: process.env.SENDGRID_API_KEY }
  })
);

transporter.verify((err, success) => {
  if (err) console.error('SendGrid transporter error:', err);
  else console.log('SendGrid transporter is ready');
});

// Health check
app.get('/', (req, res) => res.send('August Law House - Mailer running'));

// Contact form route
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'name, email and message are required' });
  }

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: `New contact form submission — ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
    html: `<h3>New contact form submission</h3>
           <p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
           <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.messageId);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
