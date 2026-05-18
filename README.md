# HopeHands Foundation - NGO Website

A modern, attractive NGO website built to inspire donations and community engagement. Features a beautiful React frontend with compelling design and a robust Java Spring Boot backend.

## Tech Stack

### Frontend
- **React 19** with Vite for fast development
- **React Router** for client-side navigation
- **React Icons** for beautiful iconography
- **Custom CSS** with animations, gradients, and responsive design

### Backend
- **Java 17** with Spring Boot 3.2
- **Spring Data JPA** for database operations
- **H2 Database** (in-memory) for development
- **Spring Validation** for input validation
- **RESTful APIs** for donations, causes, and contact

## Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section, impact stats, featured causes, testimonials, newsletter |
| **About** | Mission, vision, story, core values, timeline, team |
| **Causes** | All active causes with progress bars and donation options |
| **Donate** | Interactive donation form with cause selection and impact display |
| **Contact** | Contact form, office info, and map placeholder |

## Getting Started

### Prerequisites
- Node.js 18+
- Java 17+
- Maven 3.6+

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The frontend will be available at `http://localhost:5173`

### Backend Setup
```bash
cd backend
mvn clean package
java -jar target/ngo-backend-1.0.0.jar
```
The backend API will be available at `http://localhost:8080`

### Environment Variables
Create a `.env` file in the frontend directory:
```
VITE_API_URL=http://localhost:8080
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/donations` | Create a new donation |
| GET | `/api/donations` | Get all donations |
| GET | `/api/donations/stats` | Get donation statistics |
| GET | `/api/causes` | Get active causes |
| POST | `/api/contact` | Submit a contact message |

## Features
- Responsive design for all devices
- Smooth animations and transitions
- Heartbeat animation on donate buttons
- Progress bars for cause funding
- Interactive donation form with preset amounts
- Trust badges and impact metrics
- Newsletter subscription
- Social media links
