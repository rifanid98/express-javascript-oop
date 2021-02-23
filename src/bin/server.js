import dotenv from 'dotenv';
dotenv.config();

import app from '../main/app';
import http from 'http';

const PORT = process.env.PORT || 1337;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});