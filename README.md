# Snappy - Chat Application 
Snappy is chat application build with the power of MERN Stack. (https://www.youtube.com/watch?v=otaQKODEUFs)


## Features

    Real-Time Messaging: Users can send and receive messages instantly with no delay using Socket.io.
    User Authentication: Secure authentication via JWT, allowing users to sign up, log in, and access chat rooms.
    Chat Rooms: Users can join existing chat rooms or create new ones to chat privately or with groups.
    Typing Indicators: Real-time notifications when another user is typing.
    Message Persistence: Chat messages are stored in MongoDB for easy retrieval of chat history.
    Responsive Design: The application is fully responsive, providing an optimal experience across different devices.
    
## Technologies Used

    Frontend: React.js, HTML, CSS , Axios for API calls, Socket.io client for real-time communication.
    Backend: Node.js, Express.js for API endpoints and handling requests, Socket.io for WebSocket connections, JWT for authentication.
    Database: MongoDB with Mongoose ORM for storing user data, messages, and chat rooms.
    Real-Time Communication: Socket.io for handling real-time, bidirectional communication between clients and the server.

## Architecture

    Client-Side (React.js):
        React.js components handle the user interface, routing, and manage the state of the application.
        Axios is used to send HTTP requests to the backend for user authentication and message retrieval.
        Socket.io is used on the client-side for real-time messaging.

    Server-Side (Node.js + Express.js):
        Express.js handles API requests, user authentication, and message routing.
        The Socket.io server listens for real-time events such as sending and receiving messages.

    Database (MongoDB):
        MongoDB stores chat messages, user details, and chat room information.
        Mongoose is used for defining schemas and interacting with the database.


## Installation Guide

### Requirements
- [Nodejs](https://nodejs.org/en/download)
- [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)

Both should be installed and make sure mongodb is running.
### Installation

#### First Method
```shell
git clone https://github.com/Adarshraj562/chat-app-react-nodejs
cd chat-app-react-nodejs
```
Now rename env files from .env.example to .env
```shell
cd public
mv .env.example .env
cd ..
cd server
mv .env.example .env
cd ..
```

Now install the dependencies
```shell
cd server
yarn
cd ..
cd public
yarn
```
We are almost done, Now just start the development server.

For Frontend.
```shell
cd public
yarn start
```
For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.
```shell
cd server


```
Done! Now open localhost:3000 in your browser.
