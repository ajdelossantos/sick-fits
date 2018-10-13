require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO Use Express middleware to handle cookies via JWT
// TODO Use Express middleware to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  data => {
    console.log(`Server is now running on http://localhost:${data.port}`);
  }
);
