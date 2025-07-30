## Cinema Management System (CMS)
This repository contains a Docker-based Cinema Management System (CMS) including:
# Frontend: React application served via Nginx
Backend: Spring Boot REST API
Database: PostgreSQL
Follow the instructions below to clone, build, and run the project locally.

## Prerequisites
Git
Docker & Docker Compose
(Optional) Java 21 & Maven (to run backend standalone)
(Optional) Node.js 18+ & npm (to run frontend standalone)
Clone the Repository


git clone --branch full_project https://github.com/UmutVci/frontend-cms.git
cd frontend-cms

## Running with Docker Compose
This will build and start all services (frontend, backend, and database).

Stop any running containers and remove volumes:

docker-compose down --volumes

Build images and start containers:
# Build all services
docker-compose build --no-cache

# Or build only frontend:
docker-compose build --no-cache frontend

# Start
simply docker-compose up or (for in detached mode)
docker-compose up -d 

## 3. **Verify** services are running:

docker ps
Access the application in your browser:
Frontend (React + Nginx): http://localhost:3000
Backend REST API: http://localhost:8080/api

## API Endpoints
# First Creation/Registration of an Admin/Clerk
Before the first time login to the system follow these creation steps:
POST http://localhost:8080/api/ticket-clerks 
Post this into the body:
 {
  "email": "johndoe@cms-admin.com",
  "password": "yourpassword"
}
or for a clerk
{
  "email": "johndoe@cms-clerk.com",
  "password": "yourpassword"
}
Please note that after creation of an Admin you can also create clerks via the Admin panels, but it will be a harder password :),  but not vice-versa.

## Authentication
POST /api/auth/login → Obtain JWT token
Add the token to your header before moving on or better in the scope of this project, you can start using the frontend.
# Movies
GET /api/movies
POST /api/movies
PUT /api/movies/{id}
DELETE /api/movies/{id}
# Halls
GET /api/halls
POST /api/halls
PUT /api/halls/{id}
DELETE /api/halls/{id}
# Reservations
GET /api/reservations
POST /api/reservations
# Feedback
GET /api/feedbacks 
DELETE /api/feedbacks/{id} 

## Development Mode (Hot Reload)
If you want live-reload during development, run frontend and backend separately:
# Frontend
cd frontend
npm install
npm start
Dev server runs at http://localhost:3000
# Backend
cd backend
mvn spring-boot:run
API runs at http://localhost:8080/api



## Environment Variables
When running the backend without Docker, set:
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/cms
SPRING_DATASOURCE_USERNAME=admin
SPRING_DATASOURCE_PASSWORD=admin

## Contributors
Umut AVCI
Cihan CAN
Samet AVCI
