# MERN Blog Platform

A modern full-stack blog platform built with MongoDB, Express, React, and Node.js. Features user authentication, role-based access, admin dashboards, Cloudinary image uploads, and a rich text editor for posts.

Build, manage, and explore blogs with a professional full-stack experience.

🚀 **Live Demo**: [Click here to view](https://mhd-mern-blog.onrender.com/)

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
   ```

2. Installation dependencies 
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

3. Create a .env file in the server folder and add:
   ```bash
   MONGO_URI=your_mongodb_url
   JWT_SECRET=your_secret_key
   CLOUDINARY_CLOUD_NAME=xxxx
   CLOUDINARY_API_KEY=xxxx
   CLOUDINARY_API_SECRET=xxxx
   BREVO_API_KEY=xxxx
   ```

4.Start the dev servers:
## backend
   ```bash
      cd server && npm run dev
   ```
## frontend
   ```bash
   cd client && npm start
   ```

###  **Usage / Demo Instructions**
- How to test as an admin vs. normal user.
📖 Usage

Register a new account or sign in with Google.

To access the admin dashboard, log in with an admin account (credentials provided in seed data or manually via MongoDB).

Create, edit, and manage posts, categories, comments, and users.

## 🔗 Links

- 🌐 **Live Demo**: [Try it here](https://mhd-mern-blog.onrender.com/)
- 📄 **Portfolio Case Page**: [Read the full write-up](https://mhdsabha.com/projects/code-nest-a-full-stack-mern-blog/)



## Screenshots

1. **Home / Landing Page**  
   Clean, responsive landing page showcasing the blog’s hero section, featured technologies, and latest posts. Fully responsive across devices.
   <img width="1900" height="874" alt="image" src="https://github.com/user-attachments/assets/db87fca6-9e40-42c5-b0fd-01eee27c2349" />

2. **Admin Dashboard**  
   Full control panel for managing posts, categories, and users. Demonstrates full MERN stack CRUD operations, role-based access, and responsive admin interface.
<img width="1892" height="883" alt="image" src="https://github.com/user-attachments/assets/c2a18551-78d0-41b4-88d2-faa32ed95794" />

3. **Search & Filter Page**  
   Dynamic search and filter system with real-time results. Users can search by keywords or filter by category. Clean, responsive, and user-friendly design.
<img width="1903" height="887" alt="image" src="https://github.com/user-attachments/assets/ca787a2e-bf96-4da4-ac8f-88e80a10073b" />

4. **Comments Section**  
   Displays user comments on posts along with admin responses. Shows user avatars, comment text, and admin replies in a clear, readable layout.
<img width="1920" height="787" alt="image" src="https://github.com/user-attachments/assets/9f63a2c6-e0a7-4a73-9041-7ec95b928ca3" />
