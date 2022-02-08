import nodemail from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transport = nodemail.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS_WORRD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default transport;
