import express from 'express';
import checkLogin from '../middlewares/loginRequest.js';
import isOnlyAdmin from '../middlewares/isOnlyAdmin.js';
import { classValidator } from '../middlewares/validator.js';
import {
  createClass, deleteClass, updateClass, viewUserClass, showClass,
} from '../controllers/managerControllers.js';
import {
  listRegisterClass, updateStatus, addUserClass,
} from '../controllers/adminControllers.js';

const routers = express.Router();

// manager controllers
routers.post('/class', checkLogin, classValidator, isOnlyAdmin, createClass);
routers.delete('/class/:id', checkLogin, isOnlyAdmin, deleteClass);
routers.patch('/class/:id', checkLogin, isOnlyAdmin, updateClass);
routers.get('/class', checkLogin, showClass);
routers.get('/views-users', checkLogin, isOnlyAdmin, viewUserClass);

// admin controllers
routers.patch('/react/:id', checkLogin, isOnlyAdmin, updateStatus);
routers.post('/react/:id', checkLogin, isOnlyAdmin, addUserClass);
routers.get('/react', checkLogin, isOnlyAdmin, listRegisterClass);
export default routers;
