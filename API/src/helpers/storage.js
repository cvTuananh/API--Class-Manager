/* eslint-disable no-restricted-syntax */
import multer from 'multer';
import _ from 'lodash';
import dotenv from 'dotenv';

dotenv.config();

const storage = multer.diskStorage({
  destination(req, _file, cb) {
    cb(null, 'public/avatar');
  },
  filename(req, file, cb) {
    const mimeExtension = {
      'image/jpeg': '.jpeg',
      'image/png': '.png',
      'image/gif': '.gif',
      'image/jpg': '.jpg',
    };
    // const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(
      null,
      `${file.fieldname}-${Date.now()}${mimeExtension[file.mimetype]}`,
    );
  },
});
const fileFilter = function (req, file, cb) {
  const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  if (_.includes(allowedMimes, file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only jpg, png and gif image files are allowed.'));
  }
};
const uploadAvarta = multer({
  storage,
  fileFilter,
});

export {
  storage,
  uploadAvarta,
};
