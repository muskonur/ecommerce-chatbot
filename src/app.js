const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import chat route handler
const chatRoute = require('./routes/chatRoute'); // Ensure this path is correct

// Initialize Express application
const app = express();

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Default route to check if server is running
app.get('/', async (req, res) => {
    res.send('hello!');
});

// Use the chat route for handling /chatRoute requests
app.use('/chatRoute', chatRoute);

// Define the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server and log the port number
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});