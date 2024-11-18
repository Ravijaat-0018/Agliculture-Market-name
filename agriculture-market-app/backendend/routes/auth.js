const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import the User model
const router = express.Router();

// Registration Route
router.post('/register', async (req, res) => {
  const { username, email, password, userType } = req.body;

  // Validate the required fields
  if (!username || !email || !password || !userType) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the user already exists by email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user instance
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      userType,
    });

    // Save the user to the database
    await newUser.save();

    // Respond with a success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});


module.exports = router;

