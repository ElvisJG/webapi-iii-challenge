const express = 'express';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
  } catch (error) {}
});

router.post('/:id/posts', async (req, res) => {
  try {
  } catch (error) {}
});

router.get('/', async (req, res) => {
  try {
  } catch (error) {}
});

router.get('/:id', async (req, res) => {
  try {
  } catch (error) {}
});

router.get('/:id/posts', async (req, res) => {
  try {
  } catch (error) {}
});

router.delete('/:id', async (req, res) => {
  try {
  } catch (error) {}
});

router.put('/:id', async (req, res) => {
  try {
  } catch (error) {}
});

//custom middleware

function validateUserId(req, res, next) {}

function validateUser(req, res, next) {}

function validatePost(req, res, next) {
  if (!req.body) {
    res.status(400).json({ message: 'missing post data' });
  } else if (!req.body.text) {
    res.status(400).json({ message: 'missing required text field' });
  }
  next();
  //  ⬇️ This won't work RIP ⬇️
  //   req.body ? next() : res.status(400).json({ message: 'missing post data' });
  //   !req.body.name
  //     ? res.status(400).json({ message: ' missing required text field' })
  //     : next();
}

module.exports = router;
