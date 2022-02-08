const isOnlyAdmin = async (req, res, next) => {
  if (req.roles.roles === 'admin') {
    next();
  } else {
    res.status(401).json('permission denied or your not is a admin');
  }
};

export default isOnlyAdmin;
