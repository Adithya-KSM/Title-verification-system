# Title Verification System (MERN Stack)

## Overview
The **Title Verification System** is a MERN stack application that automatically verifies new title submissions by checking for similarities with existing titles based on predefined guidelines. This ensures that titles meet required uniqueness and formatting standards.

## Features
- **Automated Title Verification**: Detects duplicate or similar titles.
- **MongoDB Database**: Stores submitted and verified titles.
- **REST API**: Handles title submission and verification.
- **React Frontend**: User-friendly interface for submitting and checking titles.
- **Authentication (Future Update)**: Secure login for authorized users.

## Tech Stack
- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**: Mongoose, CORS, Dotenv

## Installation & Setup

### 1. Clone the Repository
```sh
 git clone https://github.com/Adithya-KSM/Title-verification-system.git
 cd Title-verification-system
```

### 2. Setup Backend
```sh
 cd backend
 npm install  # Install dependencies
 npm start    # Run the backend server
```

### 3. Setup Frontend
```sh
 cd ../frontend
 npm install  # Install dependencies
 npm start    # Run the React app
```

## Environment Variables
Create a `.env` file inside the **backend** folder with the following:
```
MONGO_URI=mongodb://localhost:27017/title_verification_db
PORT=5000
```

## API Endpoints
| Method | Endpoint      | Description |
|--------|-------------|-------------|
| POST   | `/api/titles/verify` | Verifies a new title submission |
| GET    | `/api/titles` | Fetch all stored titles |

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m "Added new feature"`)
4. Push to GitHub (`git push origin feature-branch`)
5. Open a Pull Request

## License
This project is licensed under the MIT License.

---
Feel free to contribute and enhance the system! 🚀
