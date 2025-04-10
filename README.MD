# 🎯 Student Web Tracker – Backend

This is the backend service for the **Student Job Tracker** web application, built with **Node.js**, **Express.js**, and **MongoDB Atlas**. It supports core CRUD functionalities and provides RESTful APIs for managing job applications.

## 🚀 Features

- ➕ Add a new job application
- 📋 Retrieve all job applications
- 🔄 Update the status of a job application
- ❌ Delete a job entry
- 🧠 Clean architecture: follows **Controller-Service-Repository** pattern

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Deployment: Render

## 📁 Folder Structure

```
├── config
│   └── db.js
├── controllers
│   └── jobController.js
├── models
│   └── job.js
├── repository
│   └── jobRepository.js
├── routes
│   └── jobRoutes.js
├── service
│   └── jobService.js
├── server.js
```

## 🧪 Run Locally

```bash
git clone git@github.com:efizlende/Student-web-tracker-backend.git
cd student-web-tracker-backend
npm install
npm run dev
```

Set up your `.env` file:
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/job-tracker
```

## 🌐 API Endpoints

```http
GET     /api/jobs/find-job          -> List all jobs
POST    /api/jobs/add-job          -> Add a new job
PUTCH     /api/jobs/update-status/:id      -> Update job status
DELETE  /api/jobs/delete-job/:id      -> Delete a job
Get     /api/jobs/filter-job             Filter jobs
```

## ☁️ Deployment

Render Link:  
https://student-web-tracker-backend.onrender.com/api/jobs

