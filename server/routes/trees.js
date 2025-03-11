const router = require('express').Router();
const Tree = require('../models/Tree');

// Get all trees
router.get('/', async (req, res) => {
  try {
    const trees = await Tree.find();
    res.json(trees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new tree
router.post('/', async (req, res) => {
  const tree = new Tree({
    name: req.body.name,
    nodes: req.body.nodes
  });

  try {
    const newTree = await tree.save();
    res.status(201).json(newTree);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update tree
router.patch('/:id', async (req, res) => {
  try {
    const tree = await Tree.findById(req.params.id);
    if (req.body.name) tree.name = req.body.name;
    if (req.body.nodes) tree.nodes = req.body.nodes;
    tree.updatedAt = Date.now();
    
    const updatedTree = await tree.save();
    res.json(updatedTree);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete tree
router.delete('/:id', async (req, res) => {
  try {
    await Tree.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tree deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; 