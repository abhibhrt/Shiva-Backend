const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const authenticate = require('../middleware/authMiddleware');

// 🔒 Hardcoded admin credentials
const ADMIN = {
  email: 'admin@example.com',
  password: '123'
};

const SECRET_KEY = process.env.SECRET_KEY;

// 🚪 Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN.email && password === ADMIN.password) {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    return res.json({ token });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

// 🛡 Protected route (example)
router.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'You are authorized', user: req.user });
});

module.exports = router;
