import express from 'express';
import {
  loginValidator, registerValidator, otpValidator,
} from '../middlewares/validator.js';
import checkLogin from '../middlewares/loginRequest.js';
import { uploadAvarta } from '../helpers/storage.js';
import {
  register, verifyEmail,
  login, changePassword, updateAvatar, profileUser,
} from '../controllers/authControllers.js';
import { registerClass, cancelClass, listClass } from '../controllers/registrationControllers.js';
import { listRegistered, calendarStudy } from '../controllers/classControllers.js';

const router = express.Router();

// auth controllers
router.post('/register', uploadAvarta.single('avatar'), register);
router.post('/login', loginValidator, login);
router.get('/profile', checkLogin, profileUser);
router.patch('/profile', checkLogin, uploadAvarta.single('avatar'), updateAvatar);
router.patch('/profile/password', checkLogin, changePassword);
router.post('/verify-email', otpValidator, verifyEmail);

// register controllers
router.post('/class/:classId', checkLogin, registerClass);
router.delete('/class/:id', checkLogin, cancelClass);
router.get('/class', checkLogin, listClass);

// class controllers
router.get('/class/registered-class', checkLogin, listRegistered);
router.get('/class/calendars', checkLogin, calendarStudy);

export default router;
