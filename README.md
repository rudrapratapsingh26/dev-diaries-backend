# Dev Diaries — Backend API

A RESTful blog API built with Node.js, Express, and MongoDB. Features JWT authentication with access and refresh tokens, full CRUD for blog posts, slug-based routing, and MVC architecture.

---

## Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JWT (Access + Refresh Tokens)
- bcrypt password hashing
- cookie-parser
- slugify

---

## Project Structure

```
src/
├── controllers/
│   ├── auth.controller.js
│   └── post.controller.js
├── database/
│   └── database.js
├── middleware/
│   └── auth.middleware.js
├── models/
│   ├── user.model.js
│   └── post.model.js
├── routes/
│   ├── auth.routes.js
│   └── post.routes.js
└── utils/
    ├── api-errors.js
    ├── api-response.js
    └── async-handler.js
app.js
index.js
```

---

## API Endpoints

### Auth Routes

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | /api/auth/register | Public | Register new user |
| POST | /api/auth/login | Public | Login user |
| POST | /api/auth/logout | Protected | Logout user |
| POST | /api/auth/refresh-token | Public | Refresh access token |

### Post Routes

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | /api/posts | Public | Get all published posts |
| GET | /api/posts/my-posts | Protected | Get logged in user posts |
| GET | /api/posts/:slug | Public | Get single post by slug |
| POST | /api/posts | Protected | Create new post |
| PUT | /api/posts/:id | Protected | Update post |
| DELETE | /api/posts/:id | Protected | Delete post |

---

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=8000
MONGODB_URI=your_mongodb_uri
ACCESS_TOKEN_SECRET=your_access_secret
REFRESH_TOKEN_SECRET=your_refresh_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d
CORS_ORIGIN=http://localhost:5173
```

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/rudrapratapsingh26/dev-diaries-backend.git

# Navigate to project directory
cd dev-diaries-backend

# Install dependencies
npm install

# Create .env file and add your environment variables

# Run in development
npm run dev

# Run in production
npm start
```

---

## Features

- JWT auth with access and refresh tokens stored in HTTP-only cookies
- Auto slug generation from post title using slugify
- Data isolation — users can only edit or delete their own posts
- Draft and published post status support
- MVC folder structure for clean separation of concerns
- Centralized error handling with ApiError class
- Consistent API responses with ApiResponse class
- asyncHandler wrapper to avoid try-catch repetition
- ES Modules (import/export) throughout

---

## Sample Request — Register

```
POST /api/auth/register
Content-Type: application/json

{
  "username": "rudra",
  "email": "rudra@gmail.com",
  "password": "123456"
}
```

## Sample Request — Create Post

```
POST /api/posts
Authorization: Bearer <your_access_token>
Content-Type: application/json

{
  "title": "My First Blog Post",
  "content": "This is the content of my first blog post.",
  "status": "published"
}
```

---

## Author

**Rudra Pratap Singh**
- GitHub: [@rudrapratapsingh26](https://github.com/rudrapratapsingh26)
- Twitter: [@Rudrapratap2610](https://twitter.com/Rudrapratap2610)
