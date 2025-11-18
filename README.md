# Audiophile E-commerce Website

This is a full-stack e-commerce website for audiophile products, built with a React frontend and a Node.js/Express backend.

## Features

- Browse products by category
- View product details
- Add products to cart
- Checkout process
- Responsive design

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/monseeef/audiophile.git
    cd audiophile
    ```

2.  **Backend Setup:**
    ```bash
    cd backend
    npm install
    # Create a .env file with your MongoDB connection string (e.g., MONGODB_URI=your_mongodb_uri)
    npm run seed # Optional: Seed the database with initial data
    ```

3.  **Frontend Setup:**
    ```bash
    cd ../frontend
    npm install
    ```

### Running the Project

1.  **Start the Backend Server:**
    ```bash
    cd backend
    npm run dev
    ```

2.  **Start the Frontend Development Server:**
    ```bash
    cd frontend
    npm run dev
    ```

The frontend application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Technologies Used

### Frontend

- React
- Tailwind CSS
- React Router

### Backend

- Node.js
- Express.js
- Mongoose
- MongoDB

## Contributing

Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the ISC License.
