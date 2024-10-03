const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost/auth';
const jwtSecret = process.env.JWT_SECRET || 'your_fallback_secret';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
// Use jwtSecret instead of 'secretkey' in jwt.sign() calls
const User = mongoose.model('User', {
  email: String,
  password: String,
});

app.use(express.json());

app.post('/api/register', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword });
  await user.save();
  res.send({ message: 'User created successfully' });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).send({ message: 'Invalid email or password' });
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).send({ message: 'Invalid email or password' });
  }
  const token = jwt.sign({ userId: user._id }, jwtSecret);
  res.send({ token });
});

app.post('/api/forgot-password', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }
  const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
  // Send email with reset password link
  res.send({ message: 'Reset password link sent to your email' });
});

app.post('/api/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  const decoded = jwt.verify(token, jwtSecret);
  const user = await User.findById(decoded.userId);
  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  user.password = hashedPassword;
  await user.save();
  res.send({ message: 'Password reset successfully' });
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

const authRoutes = require('./routes/auth');
// ... other imports

app.use('/api', authRoutes);
