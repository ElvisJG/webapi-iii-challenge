const express = require('express');

const Posts = require('./postDb');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.find(req.query);
    res.status(200).json(posts);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

router.get('/:id', async (req, res) => {
  try {
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

router.put('/:id', async (req, res) => {
  try {
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// custom middleware

function validatePostId(req, res, next) {
  const { uid } = req.user;
}

function validateUserId(req, res, next) {
  const { id } = req.params;

  Posts.getById(id)
    .then(post => {
      post ? next() : res.status(404).json({ message: 'invalid user ID' });
    })
    .catch(error => {
      // log error
      console.log(error);
      res.status(500).json({ message: 'Error processing request' });
    });
}

function validateUser(req, res, next) {
  req.body ? next() : res.status(400).json({ message: 'missing post data' });
  !req.body.name
    ? res.status(400).json({ message: ' missing required text field' })
    : next();
}

module.exports = router;
