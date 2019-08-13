const express = require('express');
const postRouter = require('./posts/postRouter');

const server = express();
const bodyParser = express.json();
server.use(bodyParser);
server.use(logger);

server.use('/api/posts', postRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
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
