const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();


// Initialize express app
const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    if (err) {
        console.error('❌ Error while starting the server:', err);
    } else {
        console.log(`✅ Server is listening on port ${PORT}`);
    }
});
