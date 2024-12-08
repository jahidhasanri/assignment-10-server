# Equipment Management API

This is a RESTful API built with Node.js and Express.js, connected to a MongoDB database. The API allows users to perform CRUD operations on equipment data.

## Features

- Add new equipment (POST `/equepment`)
- Get a limited number of equipment (GET `/equepment`)
- Get all equipment (GET `/equepments`)
- Get equipment details by ID (GET `/equepment/:id`)
- Get equipment for a specific user by email (GET `/myequepment?email=<email>`)
- Delete equipment by ID (DELETE `/equepment/:id`)
- Update equipment details by ID (PUT `/equepment/:id`)