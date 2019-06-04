import fs from 'fs';
import http from 'http';
import https from 'https';
import app from './app';
import config from './config';

const privateKey = fs.readFileSync('ssl/server.key', 'utf8');
const certificate = fs.readFileSync('ssl/server.crt', 'utf8');

const credentials = { key: privateKey, cert: certificate };

http.createServer(app).listen(config.port, () => {
  console.log(`
  ------------
  Server Started!
  Express:      http://localhost:${config.port}
  Swagger Docs: http://localhost:${config.port}/swagger/docs
  Swagger Spec: http://localhost:${config.port}/swagger/api-docs
  ------------
  `);
});

https.createServer(credentials, app).listen(433, () => {
  console.log(`
  ------------
  HTTPS Enabled!
  Express:      https://localhost:${433}
  ------------
  `);
});
