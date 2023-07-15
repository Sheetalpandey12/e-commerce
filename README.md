# e-commerce
install necessary package express,mongoose,body-parser,jest,supertest nodemon
# Product API

The Product API allows you to manage products and their variants. You can create, update, delete, and retrieve products using the provided endpoints. Each product can have multiple variants with additional details such as SKU, cost, and stock count.

## Schema Structure

### Product
- name (String, required): The name of the product.
- description (String, required): The description of the product.
- price (Number, required): The price of the product.
- variants (Array of Variant objects): The variants of the product.

### Variant
- name (String, required): The name of the variant.
- sku (String, required): The SKU of the variant.
- additionalCost (Number, required): The additional cost compared to the base product cost.
- stockCount (Number, required): The stock count of the variant.

## Endpoints

### Create a Product

- Endpoint: POST /products
- Description: Create a new product with optional variants.
- Request Body:


{
"name": "Product Name",
"description": "Product Description",
"price": 29.99,
"variants": [
{
"name": "Variant 1",
"sku": "VAR001",
"additionalCost": 5,
"stockCount": 10
},
{
"name": "Variant 2",
"sku": "VAR002",
"additionalCost": 8,
"stockCount": 5
}
]
}

diff
Copy code
- Response:
Status: 201 Created
{
"_id": "product_id",
"name": "Product Name",
"description": "Product Description",
"price": 29.99,
"variants": [
{
"_id": "variant_id_1",
"name": "Variant 1",
"sku": "VAR001",
"additionalCost": 5,
"stockCount": 10
},
{
"_id": "variant_id_2",
"name": "Variant 2",
"sku": "VAR002",
"additionalCost": 8,
"stockCount": 5
}
]
}

markdown
Copy code

### Update a Product

- Endpoint: PUT /products/:productId
- Description: Update an existing product by its ID.
- Request Body:
{
"name": "Updated Product Name",
"description": "Updated Product Description",
"price": 39.99
}

diff
Copy code
- Response:
Status: 200 OK
{
"_id": "product_id",
"name": "Updated Product Name",
"description": "Updated Product Description",
"price": 39.99,
"variants": [
{
"_id": "variant_id_1",
"name": "Variant 1",
"sku": "VAR001",
"additionalCost": 5,
"stockCount": 10
},
{
"_id": "variant_id_2",
"name": "Variant 2",
"sku": "VAR002",
"additionalCost": 8,
"stockCount": 5
}
]
}

markdown
Copy code

### Delete a Product

- Endpoint: DELETE /products/:productId
- Description: Delete an existing product by its ID.
- Response:
Status: 200 OK
{
"message": "Product deleted successfully"
}

markdown
Copy code

### Retrieve all Products

- Endpoint: GET /products
- Description: Retrieve all products.
- Response:
Status: 200 OK
[
{
"_id": "product_id_1",
"name": "Product 1",
"description": "Product 1 Description",
"price": 29.99,
"variants": [
{
"_id": "variant_id_1",
"name": "Variant 1",
"sku": "VAR001",
"additionalCost": 5,
"stockCount": 10
}
]
},
{
"_id": "product_id_2",
"name": "Product 2",
"description": "Product 2 Description",
"price": 39.99,
"variants": [
{
"_id": "variant_id_2",
"name": "Variant 2",
"sku": "VAR002",
"additionalCost": 8,
"stockCount": 5
}
]
}
]

yaml
Copy code

### Retrieve a specific Product

- Endpoint: GET /products/:productId
- Description: Retrieve a specific product by its ID.
- Response:
Status: 200 OK
{
"_id": "product_id",
"name": "Product Name",
"description": "Product Description",
"price": 29.99,
"variants": [
{
"_id": "variant_id_1",
"name": "Variant 1",
"sku": "VAR001",
"additionalCost": 5,
"stockCount": 10
}
]
}

markdown
Copy code

## Getting Started

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Start the server using `npm start`.
4. The API will be available at `http://localhost:3000`.
5. use `npm test` for test driven development
<!-- "test": "jest --watchAll" -->






