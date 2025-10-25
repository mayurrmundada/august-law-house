require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.TO_EMAIL) {
  console.warn('Warning: SMTP config incomplete. Please set SMTP_HOST, SMTP_USER, SMTP_PASS and TO_EMAIL in .env');
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Verify transporter
transporter.verify(function(error, success) {
  if (error) {
    console.error('Error verifying SMTP transporter:', error);
  } else {
    console.log('SMTP transporter is ready');
  }
});

app.get('/', (req, res) => res.send('August Law House - Mailer running'));

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ error: 'name, email and message are required' });

    const mailOptions = {
      from: process.env.FROM_EMAIL || `August Law House <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New contact form submission — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\n\nMessage:\n${message}`,
      html: `<h3>New contact form submission</h3>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
             <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    res.json({ success: true });
  } catch (err) {
    console.error('Error sending mail', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
