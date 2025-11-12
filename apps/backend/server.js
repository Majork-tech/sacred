require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 4000;

const app = express();

// Basic middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

// Health / quick test route
app.get('/api/ping', (req, res) => {
  res.json({ ok: true, env: process.env.NODE_ENV || 'development' });
});

// Static uploads (dev)
const uploadsPath = path.resolve(__dirname, '../../storage/uploads');
app.use('/uploads', express.static(uploadsPath));

// Simple server start
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
  console.log(`Uploads (dev) served from ${uploadsPath}`);
});
