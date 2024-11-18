const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');


const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
const DB ="mongodb+srv://ravi0003:ra003@agliculture-user.hhbrz.mongodb.net/agliculture-originalbuyer?retryWrites=true&w=majority&appName=agliculture-user"
mongoose.connect(DB).then(() => {
    console.log('connection successful');
}).catch((err) =>{
    console.log('no connection');
})

// Auth Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




