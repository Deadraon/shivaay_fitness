# Shivaay Fitness

Welcome to the **Shivaay Fitness** project repository! This full-stack application provides a modern, high-performance web experience for a premium gym located in Roorkee City, led by head coach Sagar Bhardwaj.

The system is built using the **MERN-like stack (React + Node.js + Express)**. It features a robust backend with MongoDB schemas and a stunning, responsive frontend using Vite and Vanilla CSS.

## Features
- **Modern UI/UX**: Dark mode aesthetic with vibrant orange accents, glassmorphism, and smooth animations.
- **Responsive Layout**: Works flawlessly on desktop, tablet, and mobile.
- **Backend API**: RESTful endpoints for Trainers, Classes, and Contact Inquiries.
- **Mock Fallback System**: If a MongoDB database is not provided, the backend falls back to mock data, ensuring the app runs perfectly for demonstrations.

## Prerequisites
- Node.js (v16 or higher)
- Optional: MongoDB URI if you want persistent data.

## Step-by-Step Setup Instructions

### 1. Backend Setup (Agent 2)
1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   node server.js
   ```
   > The server will start on port `5000`. By default, it connects to a local MongoDB instance. If no instance is found, it will gracefully fall back to mock data to ensure the frontend still receives data.

### 2. Frontend Setup (Agent 3)
1. Open a **new** terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   > The app will run on `http://localhost:5173`. Open this URL in your browser.

## Deployment Guidance (Agent 4)
- **Frontend (React/Vite)**: Can be easily deployed to **Vercel** or **Netlify**. Simply connect your GitHub repository and set the build command to `npm run build` and output directory to `dist`.
- **Backend (Node.js)**: Can be deployed to **Render**, **Railway**, or **Heroku**.
- **Database**: Use **MongoDB Atlas** for a free cloud database. Set the `MONGO_URI` environment variable in your deployed backend.

---

*This application was built by a collaborative AI multi-agent workflow (Architect, Backend Dev, Frontend Dev, and DevOps/Integration).*
