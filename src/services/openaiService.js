const {
    OpenAI
} = require('openai');

const {
    retrieve_an_order_status
} = require('../services/dataService.js');

const dotenv = require('dotenv');
const tools = require('../services/toolsDefinitions');

// Load environment variables from .env file
dotenv.config();

// Initialize OpenAI client with API key from environment variables
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generate a response based on the user prompt using OpenAI's chat model.
 * 
 * @param {string} prompt - The user input that will be used to generate the response.
 * @returns {Promise<string>} - The response generated by the OpenAI model.
 */

// Array to store conversation history
let messages = [{
    role: "system",
    content: `You are a customer service chatbot for an e-commerce site. You should never make a commercial recommendation/direction other than the e-commerce brand and its official website. Don't answer questions outside of your customer service role. Do not make assumptions and sampling. When you receive questions that are not relevant to your customer service role, politely indicate that you cannot answer.`
}];

const generateResponse = async (prompt) => {
    try {
        // Add user message to the messages array
        messages.push({
            role: "user",
            content: prompt
        });

        // Request completion from OpenAI's chat model
        const response = await client.chat.completions.create({
            model: "gpt-3.5-turbo",
            temperature: 0.7,
            tools: tools,
            tool_choice: "auto",
            messages: messages,
        });

        // Log the API response for debugging
        console.log('API Response:', JSON.stringify(response, null, 2));

        // Extract the assistant's response
        const responseMessage = response.choices[0]?.message?.content;

        if (responseMessage) {
            // Add the assistant's response to the messages array
            messages.push({
                role: "assistant",
                content: responseMessage
            });
        }

        // Check if there are tool calls in the response
        if (response.choices[0]?.message?.tool_calls) {
            for (const toolCall of response.choices[0].message.tool_calls) {
                if (toolCall.function.name === "retrieve_an_order_status") {
                    const functionArgs = JSON.parse(toolCall.function.arguments);
                    const functionResponse = await retrieve_an_order_status(functionArgs.orderId);

                    // Add the assistant's response to the messages array
                    messages.push({
                        role: "assistant",
                        content: null,
                        tool_calls: [{
                            id: toolCall.id,
                            type: "function",
                            function: {
                                name: toolCall.function.name,
                                arguments: toolCall.function.arguments,
                            },
                        }, ],
                    });

                    // Add the tool response to the messages array
                    messages.push({
                        tool_call_id: toolCall.id,
                        role: "tool",
                        name: toolCall.function.name,
                        content: functionResponse,
                    });

                    // Make a follow-up API request with the updated messages
                    const followupResponse = await client.chat.completions.create({
                        model: "gpt-3.5-turbo",
                        messages: messages,
                    });

                    const followupMessage = followupResponse.choices[0]?.message?.content?.trim();

                    if (!followupMessage) {
                        throw new Error('Follow-up response is missing or empty');
                    }

                    return followupMessage;
                }
                if (toolCall.function.name === "retrieve_billing_address") {
                    // Another example.
                }
                if (toolCall.function.name === "get_product_stock") {
                    // Another example.
                }
                // ...
                // ...
                // ...
                // To utilize the tools specified in the toolsDefinitions.js array, you can refer to the above example (retrieve_an_order_status).
                // Prepare the raw data in dataService.js and output it with a function.
                // The important point here is to follow the 30 prepared tool definitions defined in toolsDefinition.js.
                // You can create your own function tools in this file. All the tasks needed for a simple e-commerce site are defined here.
                // This is the core logic of the "instruction-tuned" method we focus on in this project.
            }
        }

        // Ensure the messages array only contains the last 4 messages per user
        if (messages.length > 8) { // system prompt + 4 user + 4 assistant
            messages = messages.slice(-8);
        }

        // Log the entire messages array to the terminal
        //console.log('Current messages:', messages);

        return responseMessage || "I'm sorry, I encountered an error while processing your request.";
    } catch (error) {
        // Log error details if the API request fails
        console.error('Error generating response:', error.response ? error.response.data : error.message);
        throw new Error('Failed to generate response');
    }
};


module.exports = {
    generateResponse
};