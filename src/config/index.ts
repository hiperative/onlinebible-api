import dotenv from 'dotenv';
dotenv.config();

export default {
  env: process.env.NODE_ENV || 'development',
  mongoDbUri: process.env.MONGODB_URI || '',
  apiUrl: process.env.API_URI || '',
  apiKey: process.env.API_KEY || '',
  port: process.env.PORT || 3000,
};
