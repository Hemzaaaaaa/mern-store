# Full-Stack Webstore

A full-stack webstore built with the MERN stack (MongoDB, Express, React, Node.js) and Chakra UI. 
The store allows users to browse products, as well as add, delete, and edit products 
(title, price, and image). The website also includes dark and light modes for better user experience.

## Live Demo

[Live Demo](https://mern-store-81d9.onrender.com/)

## Features

- **Browse Products**: View all available products on the homepage.
- **Add Products**: User can add new products with title, price, and image.
- **Edit Products**: User can edit the details of existing products (title, price, and image).
- **Delete Products**: User can remove products from the store.
- **Dark and Light Mode**: Switch between dark and light modes for better accessibility.

## Technologies Used

- **MERN Stack**:
  - **MongoDB**: NoSQL database to store product data.
  - **Express.js**: Web framework for Node.js to handle server-side logic.
  - **React.js**: Frontend library to build the user interface.
  - **Node.js**: JavaScript runtime to handle backend functionality.
- **Chakra UI**: A simple, modular, and accessible component library for React.

## Installation

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/Hemzaaaaaa/mern-store
2. Navigate to the backend directory:
   ```bash
   cd mern/backend
3. Install dependencies:
   ```bash
   npm install
4. Create a ```.env``` file with your MongoDB URI and the PORT:
   ```bash
   MONGO_URI=your_mongodb_uri
   PORT=5000
5. Start the backend server:
   ```bash
   npm start

### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd mern/frontend
2. Install dependencies:
   ```bash
   npm install
3. Start the frontend server:
   ```bash
   npm start
## Usage

- **Browse Products**
  - View all products in a grid layout

- **Add New Product**
  - Click "Add Product" button
  - Fill in product details
  - Submit the form

- **Edit Product**
  - Click edit icon on any product card
  - Modify desired fields
  - Save changes

- **Delete Product**
  - Click delete icon on any product card

- **Toggle Theme**
  - Click the sun/moon icon in the header to switch between dark and light modes

## Contributing

We welcome contributions to improve this project!
