const express = require('express');

const Posts = require('./postDb');
const Users = require('../users/userDb');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.get();
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

function validatePostId(req, res, next) {}

module.exports = router;
