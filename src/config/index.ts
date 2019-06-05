import dotenv from 'dotenv';
dotenv.config();

export default {
  appName: 'bible-api',
  appVersion: '1.0.0',
  env: process.env.NODE_ENV || 'development',
  mongoDbUri: process.env.MONGODB_URI || '',
  apiUrl: process.env.API_URI || '',
  apiKey: process.env.API_KEY || '',
  port: process.env.PORT || 3000,
};
