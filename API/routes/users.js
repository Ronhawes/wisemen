const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require('../prisma');

// User signup
router.post('/signup', async (req, res) => {
  const { firstName,lastName, userName, pasword } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        userName,
        pasword: hashedPassword,
      },
    });
  return   res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'User signup failed' });
  }
});

// User login
router.post('/login', async (req, res) => {
  const { userName, pasword } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { userName } });
    if (user && await bcrypt.compare(pasword, user.password)) {
      const token = jwt.sign({ userId: user.player_id }, 'your_jwt_secret', { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ error: 'User login failed' });
  }
});

module.exports = router;
