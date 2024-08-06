const express = require('express');
const router = express.Router();
const { generateResponse } = require('../services/openaiService');

// POST route to handle chat requests
router.post('/', async (req, res) => {
    // Extract prompt from the request body
    const { prompt } = req.body;

    try {
        // Generate response using the OpenAI service
        const response = await generateResponse(prompt);
        // Send the generated response back as JSON
        res.json({ response });
    } catch (error) {
        // Handle errors by sending a 500 status code and error message
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
