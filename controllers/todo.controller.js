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

// delete a todo
const deleteTodo = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
    const { id } = req.params;
    await Todo.deleteOne({ _id: id });
    res.status(204).json(req.body);
  } catch (err) {
    res.status(400).json(err);
  }
};

// edit a todo
const edit = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  try {
    const { id } = req.params;
    const { text, type, status } = req.body;
    const response = await Todo.updateOne({ _id: id }, { text, type, status });
    console.log(id, text, type, status);
    res.status(204).json(req.body);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  getAll,
  add,
  delete: deleteTodo,
  edit,
};
