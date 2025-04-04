# Real-Time Chat Application

## Introduction

This project is a full-stack real-time chat application that allows users to communicate in real-time through private or group chat rooms. The application is built using modern web technologies such as **React.js**, **Node.js**, **MongoDB**, and **Socket.io**, providing a seamless, responsive, and scalable user experience. Users can send messages instantly, view message history, and see real-time updates when others are typing or when new messages arrive.

## Features

- **Real-Time Messaging**: Users can send and receive messages instantly with no delay using Socket.io.
- **User Authentication**: Secure authentication via JWT, allowing users to sign up, log in, and access chat rooms.
- **Chat Rooms**: Users can join existing chat rooms or create new ones to chat privately or with groups.
- **Typing Indicators**: Real-time notifications when another user is typing.
- **Message Persistence**: Chat messages are stored in MongoDB for easy retrieval of chat history.
- **Responsive Design**: The application is fully responsive, providing an optimal experience across different devices.

## Technologies Used

- **Frontend**:  
  - React.js  
  - HTML, CSS  
  - Axios for API calls  
  - Socket.io-client for real-time communication

- **Backend**:  
  - Node.js  
  - Express.js for API endpoints and handling requests  
  - Socket.io for WebSocket connections  
  - JWT for authentication

- **Database**:  
  - MongoDB  
  - Mongoose ORM for storing user data, messages, and chat rooms

- **Real-Time Communication**:  
  - Socket.io for handling real-time, bidirectional communication

## Architecture

### Client-Side (React.js)

- React.js components handle the user interface, routing, and manage the state of the application.
- Axios is used to send HTTP requests to the backend for user authentication and message retrieval.
- Socket.io is used on the client-side for real-time messaging.

### Server-Side (Node.js + Express.js)

- Express.js handles API requests, user authentication, and message routing.
- The Socket.io server listens for real-time events such as sending and receiving messages.

### Database (MongoDB)

- MongoDB stores chat messages, user details, and chat room information.
- Mongoose is used for defining schemas and interacting with the database.

## Installation

### Prerequisites

- Node.js  
- MongoDB (running locally or via a cloud service like MongoDB Atlas)

## Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/itsaman080/Real-Time-Chat-Application.git
   cd Real-Time-Chat-Application
   ```

2. **Install dependencies:**

   ```bash
   cd server
   npm install
   cd ../
   ```

3. **Run the server:**

   ```bash
   npm start
   ```

4. **In a separate terminal, run the React client:**

   ```bash
   cd client
   npm install
   npm start
   ```

## Usage

- Navigate to `http://localhost:3000` to open the application.
- Sign up or log in to create/join chat rooms and start messaging.
- Real-time messages, typing indicators, and chat history are all functional upon login.

## Future Improvements

- **File Sharing**: Add functionality for users to share files within the chat.
- **Notifications**: Implement push notifications to alert users of new messages.
- **Message Reactions**: Allow users to react to messages with emojis or likes.
- **Video/Voice Chat**: Extend the application to support voice and video communication.
