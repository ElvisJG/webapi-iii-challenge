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

function validatePost(req, res, next) {}

module.exports = router;
