const tools = [
    {   ///////////////////////retrieve_an_order_status////////////////////////////////////////
        type: "function",
        function: {
            name: "retrieve_an_order_status",
            description: "Provides real-time updates on the status of customer orders, including tracking information and current order status. This function is designed to respond to inquiries such as 'What is my order status?', 'How do I check my order status or track my package?', and 'How do I check the status of my order?'.",
            parameters: {
                type: "object",
                properties: {
                    orderId: {
                        type: "string",
                        description: "Unique identifier for the order whose status is being queried. This ID is typically provided to the customer upon order confirmation and is required to fetch the specific order's tracking and status information."
                    }
                },
                required: ["orderId"]
            }
        }
    },
    {   ///////////////////////retrieve_billing_address////////////////////////////////////////
        type: "function",
        function: {
            name: "retrieve_billing_address",
            description: "Retrieves the billing address associated with a customer's order. This function is designed to address questions like 'What is a Billing Address?', 'How do I know what is my billing address?', and 'How To Check And Change Your Billing Address', providing users with the ability to view and verify the billing address details used for their orders.",
            parameters: {
                type: "object",
                properties: {
                    orderId: {
                        type: "string",
                        description: "The unique identifier of the customer's order for which the billing address is being requested. This ID helps to retrieve the specific order's billing address details accurately."
                    }
                },
                required: ["orderId"]
            }
        }
    },
    {   ///////////////////////retrieve_shipping_address////////////////////////////////////////
        type: "function",
        function: {
            name: "retrieve_shipping_address",
            description: "Retrieves the shipping address associated with a customer's order, enabling users to view and verify the delivery address details. This function is designed to assist with inquiries such as 'What Is a Shipping Address?' and 'How to Address a Package for Shipping', ensuring that customers can check and understand the destination their orders are being shipped to.",
            parameters: {
                type: "object",
                properties: {
                    orderId: {
                        type: "string",
                        description: "The unique identifier for the customer's order to retrieve the shipping address. This ID ensures accurate fetching of the delivery address details for the specified order."
                    }
                },
                required: ["orderId"]
            }
        }
    },
    {   ///////////////////////retrieve_an_order_create_date////////////////////////////////////////
        type: "function",
        function: {
            name: "retrieve_an_order_create_date",
            description: "Retrieves the creation date of a customer's order, providing users with the exact date and time their order was placed. This function is essential for customers wishing to verify when their order was initiated, helping to track order history and manage expectations regarding processing and delivery times.",
            parameters: {
                type: "object",
                properties: {
                    orderId: {
                        type: "string",
                        description: "The unique identifier for the customer's order to retrieve its creation date. Using this ID, the exact date and time the order was placed can be accurately obtained, offering transparency and clarity regarding order timelines."
                    }
                },
                required: ["orderId"]
            }
        }
    }, 
    {   ///////////////////////retrieve_an_order_items////////////////////////////////////////
        type: "function",
        function: {
            name: "retrieve_an_order_items",
            description: "Retrieves the list of items and products contained within a customer's order. Designed to answer customer inquiries such as 'What are the products in my order?', 'Bring me the contents of my order.', and 'Which products did I order?', this function enables users to view the specifics of their order's contents, including descriptions and quantities of the products ordered. ",
            parameters: {
                type: "object",
                properties: {
                    orderId: {
                        type: "string",
                        description: "The unique identifier for the customer's order to retrieve the list of items and products. This ID is neccesary for fetching detailed information about the contents of the specified order, facilitating a clear understanding of what was included in the customer's purchase."
                    }
                },
                required: ["orderId"]
            }
        }
    },
    {///////////////////////retrieve_order_refunds////////////////////////////////////////
        type: "function",
        function: {
            name: "retrieve_order_refunds",
            description: "Provides a view of the refunded items within a customer's order, without disclosing the reasons for the returns. This function is designed to respond to inquiries such as 'Check the status of my refund' or similar questions, enabling users to identify which products have been refunded in their order. ",
            parameters: {
                type: "object",
                properties: {
                    orderId: {
                        type: "string",
                        description: "The unique identifier for the customer's order to retrieve information on refunded items."
                    }
                },
                required: ["orderId"]
            }
        }
    },    
    {///////////////////////list_all_payment_gateways////////////////////////////////////////
        type: "function",
        function: {
            name: "list_all_payment_gateways",
            description: "Provides a detailed list of all available payment gateways and methods supported by the platform, enabling customers to inquire about and understand the various payment options they can use. This function is specifically designed to answer questions such as 'Which payment methods are valid?' or 'What payment options do I have?', ensuring customers have all necessary information to make informed decisions about their payment preferences for purchases.",
            parameters: {
                type: "object",
                properties: {},
                required: []
            }
        }
    },
    {///////////////////////list_all_shipping_zones////////////////////////////////////////
        type: "function",
        function: {
            name: "list_all_shipping_zones",
            description: "Retrieves a comprehensive list of countries and regions to which shipping is available. This function is designed to provide customers with clear and detailed information on shipping coverage, helping to answer queries regarding available shipping destinations. It ensures users can easily find out where the company can send orders, facilitating better planning and decision-making for international and regional deliveries.",
            parameters: {
                type: "object",
                properties: {},
                required: []
            }
        }
    },
    {//////////////////////update_an_order_note////////////////////////////////
        type: "function",
        function: {
            name: "update_an_order_note",
            description: "Allows customers to add or update a note to their order, catering to requests such as 'How do I add a note to an order?' or 'I want to add a gift note'. This functionality enhances the ordering process by providing a personalized touch, whether it’s a special instruction for delivery or a gift message for the recipient.",
            parameters: {
                type: "object",
                properties: {
                    orderId: {
                        type: "string",
                        description: "The unique identifier of the order to which the note is to be added or updated. This ID ensures that the correct order is selected for the note update."
                    },
                    customer_note: {
                        type: "string",
                        description: "The content of the note to be added or updated on the order. This could include special delivery instructions, gift messages, or any other customer preferences."
                    }
                },
                required: ["orderId", "customer_note"]
            }
        }
    },
    {///////////////////////create_an_order_note///////////////(COPILOT)/////////////////////////
        type: "function",
        function: {
            name: "create_an_order_note",
            description: "Create a note for a specific order.",
            parameters: {
                type: "object",
                properties: {
                    orderId: {
                        type: "string",
                        description: "The ID of the order to add a note to."
                    },
                    note: {
                        type: "string",
                        description: "The note to add to the order."
                    }
                },
                required: ["orderId", "note"]
            }
        }
    },
    {///////////////////////create_a_product////////////////////////////////////////
        type: "function",
        function: {
            name: "create_a_product",
            description: "Create a new product with given details.",
            parameters: {
                type: "object",
                properties: {
                    name: { type: "string", description: "Product name" },
                    regular_price: { type: "string", description: "Regular price of the product" },
                    sale_price: { type: "string", description: "Sale price of the product", optional: true }
                    // description OpenAI tarafından doldurulacak, short_description kaldırıldı
                },
                required: ["name", "regular_price"]
            }
        }
    },
    {///////////////////////update_product////////////////////////////////////////
        type: "function",
        function: {
            name: "update_product",
            description: "Update specified properties of a product using its ID or name.",
            parameters: {
                type: "object",
                properties: {
                    productId: { type: "string", description: "Product ID", optional: true },
                    productName: { type: "string", description: "Product name", optional: true },
                    newName: { type: "string", description: "New product name", optional: true },
                    status: { type: "string", description: "New product status", optional: true },
                    regular_price: { type: "string", description: "New regular price", optional: true },
                    sale_price: { type: "string", description: "New sale price", optional: true },
                    stock_quantity: { type: "string", description: "New stock quantity", optional: true }
                },
                required: []
            }
        }
    },
    {///////////////////////create_category////////////////////////////////////////
        type: "function",
        function: {
            name: "create_category",
            description: "Create a new category with the given name.",
            parameters: {
                type: "object",
                properties: {
                    categoryName: { type: "string", description: "Name of the category to create" }
                },
                required: ["categoryName"]
            }
        }
    },
    {//////////////////////update_shipping_adress////////////////////////////////////
        type: "function",
        function: {
            name: "update_shipping_address",
            description: "Enables customers to update the shipping address for their order, specifically if the order status is 'Processing'. This function caters to requests such as 'How can I change my delivery address?' or 'I want to change my shipping address', allowing for modifications to ensure accurate delivery details. It is crucial for customers to provide the correct billing email associated with the order for verification purposes and the new address details.",
            parameters: {
                type: "object",
                properties: {
                    orderId: { 
                        type: "string", 
                        description: "The unique identifier of the order for which the shipping address is to be updated. This ensures that the address update applies to the correct order." 
                    },
                    billingEmail: { 
                        type: "string", 
                        description: "The billing email associated with the order, required for verification to ensure the request comes from the rightful owner of the order." 
                    },
                    newAddress: { 
                        type: "object", 
                        description: "The comprehensive details of the new shipping address to replace the old one. This includes essential information such as name, company (optional), address lines, city, state, postcode, and country.",
                        properties: {
                            firstName: { type: "string" },
                            lastName: { type: "string" },
                            company: { type: "string", optional: true },
                            address1: { type: "string" },
                            address2: { type: "string", optional: true },
                            city: { type: "string" },
                            state: { type: "string" },
                            postcode: { type: "string" },
                            country: { type: "string" }
                        }, 
                        required: ["firstName", "lastName", "address1", "city", "state", "postcode", "country"] 
                    }
                },
                required: ["orderId", "billingEmail", "newAddress"]
            }
        }
    },
    {///////////////////////describe_product_marketing_style//////////////////////////////////////
            type: "function",
            function: {
                name: "describe_product_marketing_style",
                description: "Takes a specified product name and generates a captivating, marketing-style description designed to engage potential buyers. This tool leverages persuasive language and key selling points to highlight the product's features, benefits, and unique value proposition. Ideal for enhancing product listings, promotional materials, or online retail platforms, it aims to amplify interest and encourage consumer action by presenting the product in the most appealing manner.",
                parameters: {
                    type: "object",
                    properties: {
                        productName: { 
                            type: "string", 
                            description: "The exact name of the product to be described. This input triggers a search for the product to craft a compelling narrative that emphasizes its appeal and advantages to the target audience." 
                        }
                    },
                    required: ["productName"]
                }
            }
    },
    {/////////////////////////////get_product_stock/////////////////////////
        type: "function",
        function: {
            name: "get_product_stock",
            description: "Provides real-time information on the stock status and quantity available for a specified product via product name. Designed to answer queries such as 'What is the availability of the product?' and 'How many pieces of the product are available?'.",
            parameters: {
                type: "object",
                properties: {
                    productName: {
                        type: "string",
                        description: "The exact name of the product for which stock quantity and status are being checked."
                    }
                },
                required: ["productName"]
            }
        }
    },      
    {//////////////////////retrieve_sales_report////////////////////////////////////////
        type: "function",
        function: {
            name: "retrieve_sales_report",
            description: "Retrieve a sales report for a given date range.",
            parameters: {
                type: "object",
                properties: {
                    date_min: { type: "string", description: "Start date for the report" },
                    date_max: { type: "string", description: "End date for the report" }
                },
                required: ["date_min", "date_max"]
            }
        }
    },
    {/////////////////////////retrieve_top_sellers_report///////////////////////////
        type: "function",
        function: {
            name: "retrieve_top_sellers_report",
            description: "Retrieve a report of the top selling products for a given period or date range.",
            parameters: {
                type: "object",
                properties: {
                    period: { type: "string", description: "The period for the report (e.g., 'last_month')" },
                    date_min: { type: "string", description: "Start date for the report in 'YYYY-MM-DD' format" },
                    date_max: { type: "string", description: "End date for the report in 'YYYY-MM-DD' format" }
                },
                required: [] // Burada required alanları boş bırakıyoruz çünkü parametrelerden herhangi biri opsiyonel
            }
        }
    },
    {/////////////////////////retrieve_coupons_totals///////////////////////////////////
        type: "function",
        function: {
            name: "retrieve_coupons_totals",
            description: "Retrieve totals for all coupons.",
            parameters: {
                type: "object",
                properties: {},
                required: [] // Burada parametre yok çünkü sadece toplam kupon sayıları alınacak
            }
        }
    },
    {/////////////////////////retrieve_customers_totals///////////////////////////////////
        type: "function",
        function: {
            name: "retrieve_customers_totals",
            description: "Retrieve totals for all customers.",
            parameters: {
                type: "object",
                properties: {},
                required: [] // Parametre yok çünkü sadece toplam müşteri sayıları alınacak
            }
        }
    },
    {/////////////////////////retrieve_orders_totals///////////////////////////////////
        type: "function",
        function: {
            name: "retrieve_orders_totals",
            description: "Retrieve totals for all orders.",
            parameters: {
                type: "object",
                properties: {},
                required: [] // Parametre yok çünkü sadece toplam sipariş sayıları alınacak
            }
        }
    },
    {/////////////////////////retrieve_shipping_company///////////////////////////////////
        type: "function",
        function: {
            name: "get_shipping_company",
            description: "Designed to answer customer inquiries about the shipping companies used for order deliveries. This function is specifically intended for use when customers ask questions such as 'Which shipping company do you ship with?' or 'Which shipping companies do you work with?'. It enables customer service applications to provide immediate and accurate information on the logistic partners handling the deliveries, ensuring a seamless communication experience regarding shipping queries.",
            parameters: {
                type: "object",
                properties: {},
                required: []
            }
        }
    },
    {
        type: "function",
        function: {
            name: "get_return_policy",
            description: "Provides comprehensive details on the return policy, including conditions, timelines, and the process for initiating a return or refund for an order. Designed to answer customer inquiries such as 'How can I cancel my order?', 'What are the return conditions?', and 'Can I return my product?'. This function helps customers understand their rights and the procedures for returning products, ensuring they have all necessary information to proceed with a return or cancellation if needed.",
            parameters: {
                type: "object",
                properties: {},
                required: []
            }
        }
    },
    {
        type: "function",
        function: {
            name: "get_warranty_terms",
            description: "Provides detailed information on warranty terms and conditions for products, helping customers understand the coverage, duration, and claim process. This function is designed to answer inquiries related to 'WARRANTY TERMS AND CONDITIONS', enabling users to access specific warranty details that apply to their purchased products. It aims to clarify what is covered under warranty, how long the warranty lasts, and how customers can avail warranty service, ensuring transparency and customer satisfaction.",
            parameters: {
                type: "object",
                properties: {},
                required: []
            }
        }
    }
    ,
    {
        type: "function",
        function: {
            name: "get_shipping_date",
            description: "Provides customers with detailed information on the expected shipping date and timeline for their orders, addressing questions like 'When will you send the order?' and 'What is the shipment time?'. This function aims to offer clarity on the shipping process, including when an order is scheduled for dispatch and the estimated delivery time frame, facilitating better planning and expectation management for customers awaiting their purchases.",
            parameters: {
                type: "object",
                properties: {},
                required: []
            }
        }
    },
    {
        type: "function",
        function: {
            name: "get_customer_service_contact",
            description: "Provides the direct phone or contact number for customer service, enabling customers to easily reach out for support or inquiries. Designed to address questions such as 'What is the customer service phone number?' and 'I want to know the contact number', this function ensures users have access to the necessary contact information to receive assistance with their orders, product queries, or any other customer service needs.",
            parameters: {
                type: "object",
                properties: {},
                required: []
            }
        }
    },
    {
        type: "function",
        function: {
            name: "get_customer_service_email",
            description: "Provides the email address for customer service, allowing customers to inquire about services, support, or any issues via email. This function is essential for users looking to communicate directly with customer support through email, offering a reliable way to obtain assistance or submit queries.",
            parameters: {
                type: "object",
                properties: {},
                required: []
            }
        }
    },
    {
        type: "function",
        function: {
            name: "get_free_shipping_threshold",
            description: "Provides the specific purchase amount required to qualify for free shipping, addressing inquiries such as 'How can I take advantage of free shipping?' and 'What is the free shipping threshold?'. This function enables customers to understand the minimum spending necessary to avoid shipping fees, helping them plan their purchases accordingly to benefit from free shipping offers.",
            parameters: {
                type: "object",
                properties: {},
                required: []
            }
        }
    },
    {
        type: "function",
        function: {
            name: "get_refund_deposit_date",
            description: "Provides the estimated date for when the refunded amount will be credited to the customer's bank account. This function is designed to answer queries like 'When will the refunded money arrive?' and 'When will the refund amount appear in my bank account?', offering clarity on the refund process and helping customers understand when they can expect to receive their refunds.",
            parameters: {
                type: "object",
                properties: {},
                required: []
            }
        }
    }  
            
];

module.exports = tools;