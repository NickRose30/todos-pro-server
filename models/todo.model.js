const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  text: { type: String, required: true },
  type: { type: String, required: true },
  created: { type: Date, default: Date.now() },
}, { timestamps: true });

module.exports = mongoose.model('Todo', TodoSchema);
