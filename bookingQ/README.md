# bookingQ

Minimal bookingQ starter scaffold generated from the provided project tree.

## Backend API

This app expects a booking API endpoint at `VITE_API_BASE_URL`, which defaults to `http://localhost:4000/api`.

- `POST /bookings` to create a new booking
- `GET /bookings` to list existing bookings

Copy `.env.example` to `.env` and update `VITE_API_BASE_URL` before running.

### Running locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the backend server:

   ```bash
   npm run server
   ```

3. In a second terminal, start the frontend:

   ```bash
   npm run dev
   ```

