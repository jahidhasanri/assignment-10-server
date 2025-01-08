# Equipment Management API 🚀

This is a RESTful API built with Node.js and Express.js, connected to a MongoDB database. The API allows users to perform CRUD operations on equipment data.

---

## **Live API URL**
[Equipment Management API](https://assignment-10-solution-server.vercel.app/)

---

## **Features**

1. **Add Equipment**
   - **POST** `/equepment`  
     Add new equipment to the database.

2. **Get Limited Equipment**
   - **GET** `/equepment`  
     Retrieve a limited number of equipment.

3. **Get All Equipment**
   - **GET** `/equepments`  
     Retrieve all equipment from the database.

4. **Get Equipment by ID**
   - **GET** `/equepment/:id`  
     Retrieve specific equipment details by ID.

5. **Get User-Specific Equipment**
   - **GET** `/myequepment?email=<email>`  
     Retrieve all equipment added by a specific user (filtered by email).

6. **Delete Equipment by ID**
   - **DELETE** `/equepment/:id`  
     Delete equipment from the database by its ID.

7. **Update Equipment by ID**
   - **PUT** `/equepment/:id`  
     Update equipment details in the database by its ID.

---

## **Technologies Used**

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: Database for storing equipment data.
- **Cors**: Middleware for handling cross-origin requests.
- **Dotenv**: For environment variable management.

---

## **Dependencies**

```json
{
  "name": "assignment-10-solution-server",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    "express": "^4.21.1",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "mongodb": "^6.11.0"
  }
}


   ## Setup Instructions
**git clone https://github.com/yourusername/equipment-management-api.git**
**cd equipment-management-api**
**npm install**

## Create a .env file and Add your MongoDB connection string and JWT secret:
**MONGO_URI=your_mongodb_connection_string**
**JWT_SECRET=your_jwt_secret**
## Run the application
**npm start**
