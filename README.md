# TODO API

Basic TODO list API with JWT authentication.

## Prerequisites

-   Node.js v22.11.0
-   npm 11.0.0
-   MySQL ^3.13.0

## Getting Started

1.  `// Clone: git clone <repo_url>`
2.  `// Go to folder: cd <repo_name>`
3.  `// Install: npm install`
4.  `// Make .env: Add your MySQL and JWT info:`

    ```env
    DB_HOST=your_db_host // Your MySQL host
    DB_USER=your_db_user // Your MySQL user
    DB_PASS=your_db_password // Your MySQL password
    DB_NAME=your_db_name // Your MySQL database name
    JWT_SECRET=a_secret_string // A secret string for JWT signing
    ```

5.  `// Run: npm start`

## Using the API

-   `// See docs: http://localhost:3000/api-docs`
-   `// Get a token: POST /token (no request body)`
-   `// TODO actions (need token in "Authorization" header):`
    -   `// GET /todo: Get all TODOs.`
    -   `// GET /todo/:id: Get a specific TODO.`
    -   `// POST /todo: Add a new TODO (send { name, deadline, points } in body).`
    -   `// DELETE /todo/:id: Delete a TODO.`

## Dependencies

-   `express`: Web framework.
-   `sequelize`: ORM for database interaction.
-   `mysql2`: MySQL client for Node.js.
-   `jsonwebtoken`: JWT for authentication.
-   `dotenv`: Loads environment variables from a `.env` file.
-   `swagger-ui-express`: Serves Swagger UI.
-   `swagger-jsdoc`: Generates Swagger documentation.