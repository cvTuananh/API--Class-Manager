import multer from 'multer';
import _ from 'lodash';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  cloud_key: process.env.CLOUDINARY_KEY,
  cloud_secret: process.env.CLOUDINARY_SECRET,
});
