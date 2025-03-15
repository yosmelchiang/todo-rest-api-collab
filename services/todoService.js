const Todo = require('../models/Todo');

// Retrieve all TODO items
const getTodos = async (req, res, next) => {
  try {
    res.status(200).json(await Todo.findAll());
  } catch (err) {
    next(err);
  }
};

// Retrieve a single TODO item by ID
const getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      const error = new Error('Could not find a todo by provided id');
      error.status = 404;
      throw error;
    }
    res.status(200).json(todo);
  } catch (err) {
    next(err);
  }
};

// Creates a new TODO item
const createTodo = async (req, res, next) => {
  const { name, deadline, points } = req.body;
  try {
    res.status(201).json(await Todo.create({ name, deadline, points }));
  } catch (err) {
    next(err);
  }
};

// Deletes a TODO item by ID
const deleteTodo = async (req, res, next) => {
  try {
    const deleted = await Todo.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      const error = new Error('Could not find a todo by provided id');
      error.status = 404;
      throw error;
    }
    res.status(204).json({ status: 'success', message: 'Todo was successfully deleted' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getTodos, getTodo, createTodo, deleteTodo };
