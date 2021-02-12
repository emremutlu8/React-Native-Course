const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(req.headers.authorization, ':07');
  if (!authorization) {
    return res.status(401).send({ error: 'You must be logged in' });
  }
  const token = authorization.replace('Bearer ', '');
  console.log(token, ':12');
  jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
    console.log(payload, ':14');
    if (err) {
      return res.status(401).send({ error: 'You must be logged in' });
    }
    const { userId } = payload;

    const user = await User.findById(userId);
    req.user = user;
    next();
  });
};
