const router = require('express').Router();
const {
  createThought,
  getThoughts,
  getThoughtById,
  updateThought,
  deleteThought
} = require('../controllers/thought-controller');

// Routes for /api/thoughts
router
  .route('/')
  .get(getThoughts)
  .post(createThought);

// Routes for /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
