
const express = require('express');
const { signup, login } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/home', protect, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}` });
});

module.exports = router;
