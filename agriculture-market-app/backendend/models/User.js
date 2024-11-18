const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userType: { type: String, required: true, enum: ['customer', 'buyer'] }, // Ensure valid user types
});

// Create and export the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
