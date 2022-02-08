import express from 'express';
import morgan from 'morgan';
import cookieparser from 'cookie-parser';
import path from 'path';
import cron from 'node-cron';
import cors from 'cors';
import dotenv from 'dotenv';
import siteRouter from './routers/stiteRouter.js';
import autoSendMail from './helpers/autoSendMail.js';
import adminRouter from './routers/adminRouter.js';

const __dirname = path.resolve(path.dirname(''));
cron.schedule('2 * * * *', autoSendMail);
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(cookieparser());
app.use(express.json());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/profile/avatar', express.static(path.join(__dirname, '../public')));
app.use(express.static('public'));
app.use(cors({ origin: true, credentials: true }));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/api/v1/', siteRouter);
app.use('/api/v1/admin', adminRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

export default app;
