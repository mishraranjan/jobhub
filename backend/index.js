import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoute from './routes/user.route.js';
import companyRoute from './routes/company.route.js';
import jobRoute from './routes/job.route.js';
import applicaitonRoute from './routes/application.route.js';

dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// List of allowed origins
const allowedOrigins = [
    'http://localhost:5173',  // for development
    'https://jobhub-frontend-u3hc.onrender.com',  // production frontend
];

// CORS Options
const corsOption = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        // Check if the origin is in the allowed list
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,  // Enable credentials (cookies, headers)
};

// Apply CORS Middleware
app.use(cors(corsOption));

const PORT = process.env.PORT || 3000;

// API Routes
app.use('/api/vi/user', userRoute);
app.use('/api/vi/company', companyRoute);
app.use('/api/vi/job', jobRoute);
app.use('/api/vi/application', applicaitonRoute);

// Start the server
app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at http://localhost:${PORT}`);
});
