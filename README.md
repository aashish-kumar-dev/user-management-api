# User Management API

A RESTful User Management API built with **Node.js, Express.js, MongoDB and Mongoose**.

## Features

- User Registration & Login
- JWT Authentication
- HttpOnly Cookie Authentication
- User Profile Management
- Update User Profile
- Upload User Avatar
- Remove User Avatar
- Cloudinary Image Storage
- Delete Own Account
- Admin Authentication
- Admin Authorization
- Admin User Management
- Get All Users
- Get Single User
- Delete User

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- Cloudinary
- Multer
- Cookie Parser
- dotenv

## API Endpoints

### User Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/user/register` | Register a new user |
| POST | `/api/user/login` | Login user |
| POST | `/api/user/logout` | Logout user |

### User Profile

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/user/profile` | Get logged-in user profile |
| PUT | `/api/user/profile` | Update user profile |
| PUT | `/api/user/avatar` | Upload/update user avatar |
| DELETE | `/api/user/avatar` | Remove user avatar |
| DELETE | `/api/user/delete-account` | Delete own account |

### Admin

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/admin/login` | Admin login |
| POST | `/api/admin/logout` | Admin logout |
| GET | `/api/admin/is-auth` | Check admin authentication |
| GET | `/api/admin/all-users` | Get all users |
| GET | `/api/admin/:id` | Get a specific user |
| DELETE | `/api/admin/delete-user/:id` | Delete a user |

> Admin routes are protected using JWT-based admin authentication and authorization.

## Authentication

JWT is generated after successful user registration/login and stored in an **HttpOnly cookie**.

Protected user routes use the `authUser` middleware to verify the JWT.

Admin routes use a separate admin JWT stored in an **HttpOnly cookie**. The `isAdmin` middleware verifies the token and checks the admin role before allowing access.


## Image Upload

User avatars are uploaded to **Cloudinary**.

When a new avatar is uploaded, the previous Cloudinary image is deleted before storing the new image.

## Environment Variables

PORT=6001

MONGO_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

NODE_ENV=development

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASS=your_admin_password



## Installation :

git clone <your-github-repository-url>

cd user_management

npm install




## Run the project:

npm run dev

## The server runs on:

http://localhost:6001

## API Testing : 

You can test the APIs using:

Postman
Thunder Client
Insomnia

For protected routes, login first so that the authentication cookie is created.

## Author

**Aashish Kumar**

Backend Developer | Node.js | Express.js | MongoDB
