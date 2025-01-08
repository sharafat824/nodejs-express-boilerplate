# Node.js Express Boilerplate

A starter template for building robust RESTful APIs using Node.js, Express, and MongoDB. This boilerplate includes user authentication, CRUD operations, logging, error handling, and reusable helper functions.

## Features

- User authentication (JWT-based)
- CRUD operations for user management
- Centralized error handling and logging
- Helper functions for common utilities
- Environment configuration management
- MongoDB integration with Mongoose
- Structured project architecture for scalability

---

## Installation

### Prerequisites

- **Node.js**: Install the latest version from [Node.js Official Website](https://nodejs.org/).
- **MongoDB**: Make sure MongoDB is installed and running locally or in the cloud (e.g., MongoDB Atlas).

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/nodejs-express-boilerplate.git
   cd nodejs-express-boilerplate


Install dependencies:

npm install

Configure environment variables

Create a .env file in the root directory.

Add the following keys (replace with your values):
PORT=3000
MONGO_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET=your_secret_key

npm run dev

