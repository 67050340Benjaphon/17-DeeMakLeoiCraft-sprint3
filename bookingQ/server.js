import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(cors({ origin: true }));
app.use(express.json());

const bookings = [];

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/bookings', (req, res) => {
  res.json(bookings);
});

app.post('/api/bookings', (req, res) => {
  const { serviceId, serviceName, name, email, date, time } = req.body;

  if (!serviceId || !serviceName || !name || !email || !date || !time) {
    return res.status(400).json({ message: 'Missing booking fields.' });
  }

  const booking = {
    id: `${serviceId}-${Date.now()}`,
    serviceId,
    serviceName,
    name,
    email,
    date,
    time,
    createdAt: new Date().toISOString(),
  };

  bookings.push(booking);
  res.status(201).json(booking);
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.listen(port, () => {
  console.log(`bookingQ backend listening at http://localhost:${port}`);
});
