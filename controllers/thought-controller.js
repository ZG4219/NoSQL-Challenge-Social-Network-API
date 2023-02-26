const Thought = require('../models');

// Create a new thought
exports.createThought = async (req, res) => {
  const thought = new Thought(req.body);
  try {
    const savedThought = await thought.save();
    res.status(201).json(savedThought);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all thoughts
exports.getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single thought by ID
exports.getSingleThought = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    res.json(thought);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a thought by ID
exports.updateThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
      new: true
    });
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    res.json(thought);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a thought by ID
exports.deleteThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    res.json({ message: 'Thought deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a reaction to a thought
exports.addReaction = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    thought.reactions.push(req.body);
    const savedThought = await thought.save();
    res.status(201).json(savedThought);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remove a reaction from a thought
exports.removeReaction = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) return res.status(404).json({ message: 'Thought not found' });
    thought.reactions.id(req.params.reactionId).remove();
    const savedThought = await thought.save();
    res.json(savedThought);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createThought,
  getThoughts,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
};
