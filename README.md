# MERN Stack Login and Signup Page

## Project Overview
This project is a **MERN Stack** application that provides a simple **login** and **signup** page. It uses the following technologies:
- **MongoDB** for database management
- **Express** for the backend API
- **React** for the frontend
- **Node.js** for the server-side logic

The application implements **JWT (JSON Web Token)** authentication to manage secure login and user registration. Passwords are securely hashed using **bcryptjs**, with salt added to improve security.

## Features
- **Signup**: Users can create a new account by providing their name, email, and password.
- **Login**: Registered users can log in by providing their credentials.
- **JWT Authentication**: A secure, token-based method for logging in and accessing protected routes.
- **Password Hashing**: Passwords are hashed with bcryptjs for added security.

## Technologies Used
- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token), bcryptjs (for password hashing)
- **Environment Variables**: dotenv (for managing secrets and database URLs)

## Setup Instructions

### Prerequisites
Before setting up, ensure that the following are installed on your system:
- [Node.js](https://nodejs.org/) (includes npm)
- A running instance of MongoDB (locally or using a cloud service like MongoDB Atlas)

### 1. Clone the Project
Clone the repository to your local machine:
```bash
git clone <repository_url>
## 2. Setup Backend (Server)
Navigate to the server directory:
```bash
cd server
Install backend dependencies:
```bash
npm install
Set up the .env file in the server directory:
Create a .env file and add the following environment variables:
```bash
MONGODB_URI=mongodb://localhost:27017/yourdbname
JWT_SECRET_KEY=yourprivatekey
SALT_ROUNDS=10
Replace yourdbname with your desired MongoDB database name.
Replace yourprivatekey with a strong secret key for JWT authentication.
Start the backend server:
npm start
## 3. Setup Frontend (Client)
Navigate to the client directory:
cd client
Install frontend dependencies:
npm install
Start the React development server:
npm start
## 4. Access the Application
Once both the backend and frontend servers are running, open your browser and visit the following pages:

Signup page: http://localhost:3000/signup
Login page: http://localhost:3000/login
Folder Structure

/client
    /src
        /components
        App.js
        index.js
        etc...
/server
    /models
    /routes
    server.js
    .env
Conclusion

This project demonstrates a basic implementation of a MERN stack application with secure authentication and password handling. It can be further extended to include features like user roles, password reset functionality, and more.

License

This project is open source and available under the MIT License.


### Key Details:
- The file is organized into sections for better readability.
- Each step is clearly explained, including the setup process for both the frontend and backend.
- Replace `<repository_url>` with your actual repository URL to link to the project.
