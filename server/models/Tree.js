const mongoose = require('mongoose');

const NodeSchema = new mongoose.Schema({
  value: String,
  initialVal: Number,
  alias: String,
  children: [{
    nodeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Node'
    },
    cost: Number
  }]
});

const TreeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  nodes: [NodeSchema],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Tree', TreeSchema); 