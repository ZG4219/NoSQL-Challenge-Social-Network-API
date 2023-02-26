const router = require('express').Router();
const {
  createThought,
  getThoughts,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

// Routes for /api/thoughts
router.route('/')
  .get(getThoughts)
  .post(createThought);

// Routes for /api/thoughts/:thoughtId
router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// Route for adding a reaction to a thought
router.route('/:thoughtId/reactions')
  .post(addReaction);

// Route for removing a reaction from a thought
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
