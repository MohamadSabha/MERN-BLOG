# MERN Blog Platform

A full-featured blog application built with the MERN stack (MongoDB, Express.js, React, Node.js).
This project demonstrates modern web development practices including authentication, state management, file uploads, and admin dashboards.

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

Authentication & Authorization

JWT-based authentication

Google OAuth login

Protected routes

Blog Management

Create, edit, and delete posts

Rich text editing with TinyMCE

Categories (dynamic, admin-controlled)

Comment system with edit/delete permissions

Admin Dashboard

Manage users, posts, comments, and categories

Role-based access (admin vs. regular users)

File Uploads

Upload images/files using Cloudinary

UI/UX

Built with React, TailwindCSS, Flowbite

Clean and responsive design

Backend

Node.js & Express.js

MongoDB with Mongoose validation

Error handling middleware & async/await pattern

Additional Features

Contact form with email notifications via Brevo

Confirmation email for users & notification email to admin


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

cd client && npm install
cd ../server && npm install

3. Create a .env file in the server folder and add:
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx
BREVO_API_KEY=xxxx


4.Start the dev servers:
# backend
cd server && npm run dev
# frontend
cd client && npm start


---

###  **Usage / Demo Instructions**
- How to test as an admin vs. normal user.
📖 Usage

Register a new account or sign in with Google.

To access the admin dashboard, log in with an admin account (credentials provided in seed data or manually via MongoDB).

Create, edit, and manage posts, categories, comments, and users.

🖼️ Screenshots
