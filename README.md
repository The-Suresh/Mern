# MERN Stack Login & Signup System

This project implements a user authentication system using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The system includes user registration (signup) and authentication (login) functionality.

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js and npm (Node Package Manager)
- MongoDB
- Git (for cloning)

## Project Setup

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/yourusername/mern_stack_login.git

# Navigate to project directory
cd mern_stack_login
```

Alternatively, you can download the project as a ZIP file from the GitHub repository page.

### 2. Server Configuration

Navigate to the server directory and set up the environment:

1. Create a `.env` file in the server directory with the following variables:
```
DB=your_mongodb_connection_string
JWTPRIVATEKEY=your_jwt_secret_key
SALT=10
```

2. Open terminal and install server dependencies:
```bash
cd server
npm install
```

3. Start the server:
```bash
npm start
```

The server should now be running on http://localhost:5000 (or your configured port)

### 3. Client Setup

Open a new terminal window and set up the client:

1. Install client dependencies:
```bash
cd client
npm install
```

2. Start the client application:
```bash
npm start
```

The client application will open automatically in your default browser at http://localhost:3000

## Usage

1. Access the signup page at: http://localhost:3000/signup
2. Create a new account with your details
3. Use your credentials to log in

## Project Structure

```
mern_stack_login/
├── client/                 # React frontend
│   ├── src/
│   ├── package.json
│   └── ...
├── server/                 # Node.js backend
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── ...
└── README.md
```

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Important Notes

- Make sure MongoDB is running before starting the server
- Keep your JWT private key and database credentials secure
- The salt value in .env is used for password hashing
- Both server and client must be running simultaneously for the application to work

## Troubleshooting

If you encounter any issues:

1. Ensure all dependencies are installed properly
2. Check if MongoDB is running and accessible
3. Verify your .env configuration
4. Make sure both server and client ports are available
5. Check the console for error messages

## License

This project is open source and available under the MIT License.
