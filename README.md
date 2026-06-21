# Task Manager — Frontend (Task 2)

A React single-page application that consumes the Task Manager REST API. Built with functional components, hooks, and React Router. Supports user signup/login and full CRUD (Create, Read, Update, Delete) for tasks.

## Features

- User Signup and Login (JWT-based authentication)
- Protected routes (Tasks page only accessible when logged in)
- View all tasks
- Add a new task
- Edit an existing task
- Delete a task
- Loading and error states for all API calls

## Tech Stack

- React (functional components + hooks)
- React Router v6
- Fetch API
- Backend: Node.js + Express + MongoDB (see `task-manager-api`)

## Project Structure

src/

├── components/

│   ├── Navbar.jsx

│   └── ProtectedRoute.js

├── pages/

│   ├── Login.js

│   ├── Signup.js

│   └── Tasks.js

├── services/

│   └── api.js

└── App.js

## Setup & Run

1. Make sure the backend (`task-manager-api`) is running on `http://localhost:5000`
2. Install dependencies:
npm install
3. Start the app:
npm start
4. Open [http://localhost:3000](http://localhost:3000)

## API Endpoints Used

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/signup | Register a new user |
| POST | /api/auth/login | Log in and receive JWT token |
| GET | /tasks | Get all tasks |
| POST | /tasks | Create a new task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

## Screenshots
<img width="1365" height="767" alt="signup" src="https://github.com/user-attachments/assets/1af5f039-7252-44c2-ae62-f88823158fe9" />
![alt text](signup.png) ![alt text](<login page.png>) ![alt text](<task no found.png>) ![alt text](<added task.png>) ![alt text](<edit task.png>) ![alt text](<Edit tasks.png>) ![alt text](<login page (2).png>)

<img width="800" height="423" alt="ReactApp-Profile1-MicrosoftEdge2026-06-2118-43-50-ezgif com-video-to-gif-converter" src="https://github.com/user-attachments/assets/ff552fad-a850-4c1b-9f80-f1d9ef47117b" />




