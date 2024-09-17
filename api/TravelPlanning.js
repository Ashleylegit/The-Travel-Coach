import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password',
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'recipient-email@example.com',
      subject: 'New Message from Contact Form',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending message!' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed!' });
  }
}
