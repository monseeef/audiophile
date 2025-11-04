Audiophile E-commerce Frontend
This is a pixel-perfect, fully responsive frontend for the Audiophile e-commerce website. The project is built using React and Vite, with all styling handled by Tailwind CSS based on a provided design system.

It is a multi-page application that includes product category pages, dynamic product detail pages, and a complete checkout flow with a global cart managed by the React Context API.


✨ Features
Multi-Page Navigation: Fully functional routes for Home, Headphones, Speakers, and Earphones using react-router-dom.

Dynamic Product Pages: A single ProductDetail component handles all products by loading data from a central data.js file.

Global Cart State: A site-wide cart managed with React Context (CartContext.jsx) that allows users to add items, see a summary, and check out.

Interactive Modals:

Cart modal for viewing/clearing the cart.

Order confirmation modal after a successful checkout.

Complete Checkout Flow: A multi-step form for checkout with validation (can be added) and a live-updating summary.

Pixel-Perfect & Responsive: Built from the ground up to match the provided desktop and mobile designs using Tailwind's responsive utilities.

🛠 Tech Stack
Core: React.js

Bundler: Vite

Styling: Tailwind CSS

Routing: React Router DOM v6

State Management: React Context API

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development.

Prerequisites
You must have Node.js (version 20.19+ or 22.12+) installed on your machine.

Installation & Setup
Clone the repository:

Bash

git clone https://github.com/your-username/audiophile-project.git
Navigate to the project directory:

Bash

cd audiophile-project
Install dependencies: This project uses npm.

Bash

npm install
Run the development server: Once the dependencies are installed, run the development server.

Bash

npm run dev
The application will be available at http://localhost:5173/