const express = require('express');

const Posts = require('./postDb');
const router = express.Router();

// GET /api/posts
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

// PUT /api/posts/{id}
router.get('/:id', async (req, res) => {
  try {
    const post = await Posts.getById(req.params.id);

    post
      ? res.status(200).json(post)
      : res.status(404).json({ message: 'Post not found' });
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// PUT /api/posts/{id}
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const destroy = await Posts.remove(id);

    if (id) {
      res.status.json({
        destroy,
        message: `Destroyed the post with an ID of ${id}`
      });
    } else {
      res
        .status(404)
        .json({ message: 'The post with the specified ID does not exist' });
    }
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// PUT /api/posts/{id}
router.put('/:id', validatePost, async (req, res) => {
  try {
    // const { id } = req.params;
    // const { text } = req.body;
    const update = await Posts.update(req.params.id, req.body);

    // if (!id) {
    //   res
    //     .status(404)
    //     .json({ message: 'The post with the specified ID does not exist' });
    // } else if (!text) {
    //   res.status(404).json({ message: 'Please provide text for the post' });
    // } else {
    res.status(200).json(update);
    // }
  } catch (error) {
    // log error
    console.log(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

// custom middleware

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
