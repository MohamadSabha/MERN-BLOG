# Code Nest – Full-Stack MERN Blog Platform

Code Nest is a comprehensive full-stack blogging platform built with the MERN stack (MongoDB, Express, React, Node.js). Designed to emulate a real-world production application, it provides a seamless experience for both readers and content administrators. The platform includes user authentication, role-based permissions, a powerful admin dashboard, dynamic content management, and a modern, responsive UI.
This project was an intensive deep dive into full-stack development, focusing on security, scalability, and user-friendly design.


🚀 **Live Demo**: [Click here to view](https://mhd-mern-blog.onrender.com/)



## Features

- User authentication with JWT & Google OAuth (sign up, sign in, sign out, Google OAuth)
- User roles (Admin/User) with protected routes
- Create, edit, and delete blog posts (admin only)
- Rich text editor for posts (TinyMCE)
- Image upload via Cloudinary
- Dynamic category management (admin only)
- Comment system with likes, edit, and delete
- Responsive UI with dark/light mode
- Search and filter posts by keyword, category, and sort order
- Admin dashboard for managing users, posts, comments, and categories
- Modern UI with gradients, animations, and professional design


## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Flowbite React, Redux Toolkit, TinyMCE
- **Backend:** Node.js, Express.js, MongoDB (Mongoose)
- **Authentication:** JWT, bcrypt, Google OAuth
- **Image Upload:** Cloudinary
- **State Management:** Redux Toolkit, redux-persist
- **Image Hosting:** Cloudinary
- **Email Service:** Brevo

## Notable Directories & Files

- `api/routes/` — All backend API routes (users, posts, comments, categories, auth, contact)
- `api/controllers/` — Logic for each API endpoint
- `api/models/` — Mongoose models for User, Post, Comment, Category
- `client/src/pages/` — Main React pages (Home, About, Projects, Dashboard, etc.)
- `client/src/components/` — Reusable UI components (Header, Footer, PostCard, etc.)
- `client/src/redux/` — Redux store and slices for user and theme
- `client/tailwind.config.js` — Tailwind CSS configuration


## ⚙️ Installation & Setup  
###  1. Prerequisites  

- Node.js v18+ (required for Vite & modern dependencies)  
- MongoDB Atlas cluster (or a local MongoDB instance)  
- A Cloudinary account for image uploads  
- A Firebase project (only needed if you want to test Google OAuth)  
- A Brevo account (for email notifications)
- TinyMCE API key (for the rich text editor used in blog posts)

###  2. Clone the Repository  
```bash
git clone https://github.com/username/mern-blog.git
cd mern-blog
```
###  3. Install Dependencies  

Install backend and frontend dependencies:  

```bash
# Backend
cd api
npm install

# Frontend
cd ../client
npm install
```
All required packages (Express, Mongoose, Vite, TailwindCSS, Flowbite, Redux Toolkit, etc.) are already included in package.json. Running npm install will fetch everything — no manual setup needed.

###  4. Configure Environment Variables  
Backend (/api/.env)  

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
SECRET=your_jwt_secret

BREVO_API_KEY=your_brevo_api_key
EMAIL_SENDER=your_verified_sender_email
EMAIL_RECEIVER=your_email_for_notifications
SEND_AUTOREPLY=true
```
Frontend (/client/.env)  

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_CLOUDINARY_UPLOAD_URL=https://api.cloudinary.com/v1_1/<cloud_name>/image/upload
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
VITE_EDITOR_KEY=your_tinymce_editor_api_key
```


### 5. Start Development Servers  

In two terminals:  
Start backend
```env

cd api
npm run dev
```
Start frontend
```env

cd client
npm run dev
```
Backend runs on http://localhost:3000
Frontend runs on http://localhost:5173


### 6. Demo Admin Account  

To explore admin features without manual DB setup, you can log in with:  

Email: admin@hotmail.com  
Password: admin123  

⚠️ Note: This demo account is for testing only. Some destructive actions (like deleting users or categories) may affect functionality.  


### 7. Optional (Production Build)  

If you want to build the project for production:  

Backend + Frontend build
```bash
npm run build
```















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
