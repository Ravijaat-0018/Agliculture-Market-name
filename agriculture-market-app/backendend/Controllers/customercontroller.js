const express = require('express');
const bcrypt = require('bcryptjs'); // For password hashing
const customerUser = require('../models/customerSchema'); // Import the model
const router = express.Router();

// Register Route (POST)
router.post('/register', async (req, res) => {
  const { username, email, password, userType } = req.body;

  try {
    // Check if user already exists
    const existingUser = await customerUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new customer user
    const newUser = new customerUser({
      username,
      email,
      password: hashedPassword,
      userType, // Save the user type as either 'customer' or 'buyer'
    });

    // Save user to the database
    await newUser.save();

    res.status(201).json({ message: 'Registration successful!' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

module.exports = router;
