# 💼 Job Portal Website (MERN Stack)

A full-stack **Job Portal Web Application** built with the **MERN stack** that enables companies to post jobs and applicants to apply, search, and manage their job applications.

---

## 🚀 Features

### 👤 Users (Job Seekers)
- Register and login securely
- Browse and filter jobs by title, company, location, etc.
- Apply to jobs with resume upload
- View and manage applied jobs
- Edit profile details

### 🏢 Companies (Employers)
- Register and login
- Create and manage job postings
- View applicants for each job
- Update company profile and branding

### 🛡️ Admin Panel
- View and manage all users, jobs, and companies
- Remove or deactivate any entity
- Access dashboard analytics (optional)

---

## 🛠 Tech Stack

### 🔷 Frontend
- React.js
- Redux Toolkit (if used)
- Tailwind CSS
- Axios

### 🔶 Backend
- Node.js
- Express.js
- MongoDB with Mongoose

### 🔐 Utilities & Tools
- JWT Authentication
- Cloudinary (for resume upload or logos)
- Multer (for file uploads)
- RESTful APIs

---

## 📁 Folder Structure

```plaintext
Job-Portal/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── .env.sample
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── .env.sample
├── .gitignore
├── README.md

🔐 Environment Variables

✅ Backend (/backend/.env)

PORT=8000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

✅ Frontend (/frontend/.env)
VITE_API_BASE_URL=http://localhost:8000/api/v1

🧑‍💻 Getting Started Locally

1️⃣ Clone the Repository
git clone https://github.com/rohitseth01/Job-Portal-Website.git
cd Job-Portal-Website

2️⃣ Install Dependencies

Backend
cd backend
npm install

Frontend
cd ../frontend
npm install

3️⃣ Run the Application

Start Backend
cd backend
npm start

Start Frontend
cd frontend
npm run dev


