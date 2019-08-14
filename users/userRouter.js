const express = require('express');

const Users = require('./userDb');
const Post = require('../posts/postDb');
const router = express.Router();

// POST /api/users
router.post('/', validateUser, async (req, res) => {
  try {
    const addUser = await Users.insert(req.body);
    res.status(200).json(addUser);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// POST /api/users/{id}/posts
router.post('/:id/posts', [validateUserId, validatePost], async (req, res) => {
  try {
    const post = { ...req.body, user_id: req.params.id };
    const addpost = await Post.insert(post);
    res.status(201).json(addpost);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// GET /api/users
router.get('/', async (req, res) => {
  try {
    const allUsers = await Users.get();
    res.status(200).json(allUsers);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// GET /api/users/{id}
router.get('/:id', validateUserId, async (req, res) => {
  try {
    const user = await Users.getById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// GET /api/users/{id}/posts
router.get('/:id/posts', validateUserId, async (req, res) => {
  try {
    const posts = await Users.getUserPosts(req.params.id);
    res.status(200).json(posts);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// DELETE /api/users/{id}
router.delete('/:id', validateUserId, async (req, res) => {
  try {
    const destroy = await Users.remove(req.params.id);
    res.status(200).json(destroy);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// PUT /api/users/{id}
router.put('/:id', [validateUserId, validateUser], async (req, res) => {
  try {
    const update = await Users.update(req.params.id, req.body);
    res.status(200).json(update);
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

//custom middleware

function validateUserId(req, res, next) {
  const { id } = req.params;

  Users.getById(id)
    .then(user => {
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(400).json({ message: 'invalid user ID' });
      }
    })
    .catch(error => {
      // log error
      console.log(error);
      res.status(500).json({ message: 'Error processing request' });
    });
}

// Middleware

function validateUser(req, res, next) {
  if (!req.body) {
    res.status(400).json({ message: 'missing user data' });
  } else if (!req.body.name) {
    res.status(400).json({ message: 'missing required name field' });
  } else {
    next();
  }
}

function validatePost(req, res, next) {
  if (!req.body) {
    res.status(400).json({ message: 'missing post data' });
  } else if (Object.keys(req.body.text).length <= 0) {
    res.status(400).json({ message: 'missing required text field' });
  } else {
    next();
  }
}

module.exports = router;
