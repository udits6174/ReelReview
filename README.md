# Reel Review

Reel Review is a web application that allows users to explore and review movies using data from The Movie Database (TMDb) API.

## Live Demo

- [Reel Review Frontend](https://reel-review-frontend-mn5bj6pj2-udits6174s-projects.vercel.app/)
- [Reel Review Backend](reelreview-txf0.onrender.com)

## Tech Stack

- Frontend: React, JavaScript, SCSS
- Backend: Express, Node.js
- API: The Movie Database (TMDb) [API-reference](https://developer.themoviedb.org/reference/intro/getting-started)

## Project Structure

The project is divided into two main parts:

1. `client/`: Contains the frontend React application
2. `server/`: Contains the backend Express server

The backend server routes all requests through it to resolve CORS issues when interacting with the TMDb API.

## Local Development Setup

### Frontend

1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the `client` directory with the following content:
   ```
   VITE_APP_BE_URL=http://localhost:8080
   ```
   Replace the URL with your local backend server URL if different.

4. Start the development server:
   ```
   npm run dev
   ```

### Backend

5. Navigate to the server directory:
   ```
   cd server
   ```

6. Install dependencies:
   ```
   npm install
   ```

7. Create a `.env` file in the `server` directory with the following content:
   ```
   TMDB_TOKEN=your_tmdb_api_token_here
   ```
   Replace `your_tmdb_api_token_here` with your actual TMDb API token.

8. Start the server:
   ```
   npm run start
