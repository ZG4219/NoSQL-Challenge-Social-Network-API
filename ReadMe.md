# NoSQL Challenge Social Network API

This API allows users to create and manage a social network with features like creating profiles, creating posts, commenting on posts, and following other users. The API is built using NoSQL technologies and JavaScript.

## Requirements
- Node.js
- MongoDB

## Getting Started

- Clone the repository to your local machine.
- Run `npm install` to install the required dependencies.
- Start your MongoDB server.
- Run `npm start` to start the API server.

## API Endpoints

The API has the following endpoints:

## User Endpoints

- `POST /users`: Creates a new user
- `GET /users/:id`: Gets a user by ID
- `PUT /users/:id`: Updates a user by ID
- `DELETE /users/:id`: Deletes a user by ID

## Post Endpoints

- `POST /posts`: Creates a new post
- `GET /posts`: Gets all posts
- `GET /posts/:id`: Gets a post by ID
- `PUT /posts/:id`: Updates a post by ID
- `DELETE /posts/:id`: Deletes a post by ID

## Comment Endpoints

- `POST /comments`: Creates a new comment
- `GET /comments`: Gets all comments
- `GET /comments/:id`: Gets a comment by ID
- `PUT /comments/:id`: Updates a comment by ID
- `DELETE /comments/:id`: Deletes a comment by ID

## Follow Endpoints

- `POST /follow`: Follows another user
- `DELETE /follow/:id`: Unfollows a user

## Links

Github: https://github.com/ZG4219/NoSQL-Challenge-Social-Network-API
Video Walkthrough: 