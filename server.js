const express = require('express');
const postRouter = require('./posts/postRouter');
const usersRouter = require('./users/userRouter');

const server = express();

// Express.json is a method that returns a piece of middleware
const bodyParser = express.json();

// Middleware
server.use(bodyParser);
server.use(logger);

server.use('/api/posts', postRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

//custom middleware

function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      'Origin'
    )}`
  );
  next();
}

module.exports = server;
