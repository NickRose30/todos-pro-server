const express = require('express');
const TodoController = require('../controllers/todo.controller');

const router = express.Router();

/* get and create todos */
router.route('/todos')
  .get(TodoController.getAll)
  .post(TodoController.add);

module.exports = router;
