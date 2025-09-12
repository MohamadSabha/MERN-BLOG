
# MERN Blog Platform

A modern full-stack blog platform built with MongoDB, Express, React, and Node.js. Features user authentication, role-based access, admin dashboards, Cloudinary image uploads, and a rich text editor for posts.

Build, manage, and explore blogs with a professional full-stack experience.

🚀 **Live Demo**: [Click here to view](https://your-app-url.com)

## Table of Contents
- Features
- Tech Stack
- Installation & Setup
- Usage
- Screenshots
- Future Improvements
- License


## Features
- 🔐 Authentication with JWT & Google OAuth
- 👤 User roles (Admin/User) with protected routes
- 📂 MongoDB models with validation & relationships
- 📝 Rich text editor (TinyMCE) for post creation
- 🖼️ Cloudinary image upload for users & posts
- 🗂️ Dynamic categories managed by admin
- 💬 Comment system (create/edit/delete by admins)
- 📊 Admin dashboard (manage users, posts, categories, comments)

## Tech Stack
**Frontend:** React, Redux, TailwindCSS, Flowbite  
**Backend:** Node.js, Express.js, JWT, Google OAuth  
**Database:** MongoDB (Mongoose ODM)  
**Image Hosting:** Cloudinary  
**Email Service:** Brevo  
**Deployment:** Render (backend), Vercel/Netlify (frontend)


## Installation & Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/username/mern-blog.git
   cd mern-blog

2. Installation dependencies 
   ```bash
   cd client && npm install
   cd ../server && npm install

3. Create a .env file in the server folder and add:
   ```bash
   MONGO_URI=your_mongodb_url
   JWT_SECRET=your_secret_key
   CLOUDINARY_CLOUD_NAME=xxxx
   CLOUDINARY_API_KEY=xxxx
   CLOUDINARY_API_SECRET=xxxx
   BREVO_API_KEY=xxxx

4.Start the dev servers:
## backend
      ```bash
      cd server && npm run dev
## frontend
      ```bash
      cd client && npm start
---

###  **Usage / Demo Instructions**
- How to test as an admin vs. normal user.
📖 Usage

Register a new account or sign in with Google.

To access the admin dashboard, log in with an admin account (credentials provided in seed data or manually via MongoDB).

Create, edit, and manage posts, categories, comments, and users.

🖼️ Screenshots
