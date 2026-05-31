# Dev Diaries — Backend API

A RESTful blog API built with Node.js, Express, and MongoDB. Features JWT authentication with access and refresh tokens, full CRUD for blog posts, slug-based routing, Cloudinary image uploads, and MVC architecture.

---

## Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- JWT (Access + Refresh Tokens)
- bcrypt password hashing
- Cloudinary image uploads
- Multer for file handling
- cookie-parser
- slugify

---

## Project Structure

```
src/
├── controllers/
│   ├── auth.controller.js
│   ├── post.controller.js
│   └── upload.controller.js
├── database/
│   └── database.js
├── middleware/
│   └── auth.middleware.js
├── models/
│   ├── user.model.js
│   └── post.model.js
├── routes/
│   ├── auth.routes.js
│   ├── post.routes.js
│   └── upload.routes.js
└── utils/
    ├── api-errors.js
    ├── api-response.js
    ├── async-handler.js
    └── cloudinary.js
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

### Upload Routes

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | /api/upload | Protected | Upload image to Cloudinary |

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
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
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
- Cloudinary image upload with multer memory storage
- MVC folder structure for clean separation of concerns
- Centralized error handling with ApiError class
- Consistent API responses with ApiResponse class
- asyncHandler wrapper to avoid try-catch repetition
- ES Modules (import/export) throughout
- Auto redirect on expired JWT tokens

---

## Live Demo

- **Frontend:** [dev-diaries-frontend-dun.vercel.app](https://dev-diaries-frontend-dun.vercel.app)
- **Backend:** [dev-diaries-backend-production.up.railway.app](https://dev-diaries-backend-production.up.railway.app)
- **Frontend Repo:** [github.com/rudrapratapsingh26/dev-diaries-frontend](https://github.com/rudrapratapsingh26/dev-diaries-frontend)

---

## Author

**Rudra Pratap Singh**
- GitHub: [@rudrapratapsingh26](https://github.com/rudrapratapsingh26)
- Twitter: [@Rudrapratap2610](https://twitter.com/Rudrapratap2610)
