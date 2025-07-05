import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';

dotenv.config(); // Load .env variables

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON

// Routes
app.use('/api/auth', authRoutes);

// Server Listen
const PORT = process.env.PORT || 5973;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
