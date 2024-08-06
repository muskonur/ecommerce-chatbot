# Instruction-Tuned OpenAI Chatbot

![Instruction-Tuned OpenAI Chatbot](https://www.aionisys.com/wp-content/uploads/2024/08/openai-express-banner.png)

**Instruction-Tuned OpenAI Chatbot** is an OpenAI API-powered Express application that demonstrates how an instruction-tuned language model can be integrated with a site's data to perform specific tasks and provide meaningful responses. This project also features a memory system to retain conversation context, ensuring coherent and relevant interactions.

## Project Overview

This application showcases two main aspects:
1. **Instruction-Tuned Model with Custom Tools:** Utilizes an instruction-tuned language model to interact with users and perform tasks based on predefined tools. The tools are defined in the `toolsDefinition.js` file and include 30 custom prompts designed for common e-commerce tasks.
2. **Memory Feature for Contextual Conversations:** Implements a memory feature that allows the chatbot to retain the context of the conversation, ensuring that messages are coherent and relevant to the ongoing interaction.

By using this application, you can integrate your own site data with the provided tools to create a customized customer service chatbot that can handle a variety of tasks, enhancing user experience and support.

## Features

### 1. Instruction-Tuned Model with Custom Tools

The application uses an instruction-tuned language model to process user inputs and perform tasks based on 30 predefined tools. These tools cover essential e-commerce functions, including:

- **Order Status Retrieval:** Check the status of customer orders.
- **Billing Address Retrieval:** Fetch the billing address associated with an order.
- **Product Stock Check:** Verify stock availability of products.

The tools are defined in `toolsDefinition.js` and are designed to be easily extended or modified to fit different requirements.

### 2. Memory Feature for Contextual Conversations

The memory feature stores the last four user and assistant messages in the session, maintaining context throughout the conversation. This ensures that the assistant provides responses that are relevant and coherent, based on the entire interaction history.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/instruction-tuned-express-chatbot.git
    cd instruction-tuned-express-chatbot
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Set up your OpenAI API key:**
    - Create a `.env` file in the root directory.
    - Add your OpenAI API key to the `.env` file:
        ```plaintext
        OPENAI_API_KEY=your-api-key
        ```

4. **Start the application:**
    ```bash
    npm start
    ```

## Example Tools

Below are some examples of the tools defined in `toolsDefinition.js`:

### `retrieve_an_order_status`

- **Description:** Provides updates on the status of customer orders.
- **Example Usage:**
    ```javascript
    const functionResponse = await retrieve_an_order_status(orderId);
    ```
- **Parameters:** 
    - `orderId` (string): The ID of the order whose status you want to retrieve.

### `retrieve_billing_address`

- **Description:** Fetches the billing address for a given order.
- **Example Usage:**
    ```javascript
    const functionResponse = await retrieve_billing_address(orderId);
    ```
- **Parameters:**
    - `orderId` (string): The ID of the order for which you want to get the billing address.

### `get_product_stock`

- **Description:** Checks the stock availability of a specific product.
- **Example Usage:**
    ```javascript
    const functionResponse = await get_product_stock(productId);
    ```
- **Parameters:**
    - `productId` (string): The ID of the product for which you want to check stock availability.

These tools can be used as-is or customized to meet specific needs. They provide foundational functionality for managing e-commerce operations and can be integrated into your chatbot to enhance its capabilities.

## Memory Management

The application maintains context by storing the last four user and assistant messages. This ensures that the assistant can provide relevant responses based on recent interactions. The `generateResponse` function manages this by keeping only the most recent messages in the context:

```javascript
// Ensure the messages array only contains the last 4 messages per user
if (messages.length > 8) {
    messages = messages.slice(-8);
}

## Check Out Our WordPress Plugin

Have you checked out our unique WordPress plugin, **Aion Assists - Customer Service**, designed specifically for WooCommerce stores? This plugin offers a wide range of features that streamline customer service operations, making it easier for store owners to manage and respond to customer inquiries efficiently. For more information and to explore its capabilities, visit the [Aion Assists Customer Service plugin page](https://wordpress.org/plugins/aion-assists/).

## Usage

Interact with the chatbot by sending POST requests to the `/chat` endpoint. Here is an example using `curl`:

```bash
curl -X POST http://localhost:3000/chat -H "Content-Type: application/json" -d '{"prompt": "What is my order status? 32423 is my order ID"}'

