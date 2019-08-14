const express = require('express');

const Users = require('./userDb');
const router = express.Router();

// POST /api/users
router.post('/', async (req, res) => {
  try {
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// POST /api/users/{id}/posts
router.post('/:id/posts', async (req, res) => {
  try {
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
router.get('/:id/posts', async (req, res) => {
  try {
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// DELETE /api/users/{id}
router.delete('/:id', async (req, res) => {
  try {
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// PUT /api/users/{id}
router.put('/:id', async (req, res) => {
  try {
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

function validateUser(req, res, next) {}

function validatePost(req, res, next) {}

module.exports = router;
