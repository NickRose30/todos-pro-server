const { Todo } = require('../models');

// get all todos
const getAll = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(400).json(err);
  }
};

// add a new todo
const add = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
    await Todo.create(req.body);
    res.status(204).json(req.body);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getAll,
  add,
};
