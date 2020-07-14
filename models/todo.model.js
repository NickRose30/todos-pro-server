const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  text: { type: String, required: true },
  type: { type: String, required: true },
  status: {
    type: String,
    default: 'INCOMPLETE',
    enum: ['COMPLETE', 'INCOMPLETE'],
  },
  created: { type: Date, default: Date.now() },
}, { timestamps: true });

module.exports = mongoose.model('Todo', TodoSchema);
