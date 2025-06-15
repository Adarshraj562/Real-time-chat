# Real-time-chat

# ChatWeb-App

A full-stack real-time chat application built with React (frontend) and Node.js/Express (backend). Users can register, log in, set avatars, and chat with each other in real time.

## Features
- User registration and login
- Avatar selection
- Real-time messaging
- List of online contacts
- Responsive UI

## Folder Structure
```
ChatWeb-App/
├── images/                # App images
├── public/                # React public assets
├── src/                   # React source code
│   ├── assets/            # Static assets (gifs, svgs)
│   ├── components/        # Reusable React components
│   ├── pages/             # Page components (Login, Register, Chat)
│   └── utils/             # Utility files (API routes)
├── server/                # Node.js backend
│   ├── controllers/       # Express controllers
│   ├── models/            # Mongoose models
│   ├── routes/            # Express routes
│   └── index.js           # Server entry point
└── README.md
```

## Prerequisites
- Node.js (v16 or above recommended)
- npm or yarn
- MongoDB (local or cloud)

## Setup Instructions

### 1. Clone the repository
```
git clone https://github.com/Adarshraj562/ChatWebAp.git
cd ChatWeb-App
```

### 2. Install dependencies
#### For the client (React app):
```
cd public
npm install
```
#### For the server (Node.js backend):
```
cd ../server
npm install
```

### 3. Configure environment variables
Create a `.env` file in the `server/` directory with your MongoDB URI and any other secrets:
```
MONGO_URL=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

### 4. Run the application
#### Start the backend server:
```
cd server
npm start
```
#### Start the frontend (React app):
```
cd ../public
npm start
```

- The React app will run on [http://localhost:3000](http://localhost:3000)
- The backend server will run on [http://localhost:5000](http://localhost:5000)

## Deployment
- For production, build the React app with `npm run build` in the `public/` folder and serve it with a static server or integrate with the backend.

## License
This project is licensed under the MIT License.
