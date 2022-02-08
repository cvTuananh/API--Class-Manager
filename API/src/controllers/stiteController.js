import db from '../config/database.js';

const getHome = (req, res) => {
  res.send('welcome to register class');
};

const getUser = async (req, res) => {
  const user = await db.models.user.findAll();
  return res.status(200).json({ user });
};

export { getUser, getHome };
