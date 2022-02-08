import express from 'express';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import Users from '../models/users.js';

const app = express();
app.use(cookieParser);

const checkLogin = async (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1];
  await jwt.verify(token, process.env.SCRECT_KEY, (err, decoded) => {
    if (err) {
      res.json('token is not right');
    } else {
      req.userId = decoded.id;
    }
  });
  req.roles = await Users.findOne({ where: { id: req.userId } });
  next();
};

export default checkLogin;
