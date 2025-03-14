const Todo = require('../models/Todo');

// Retrieve all TODO items 
const getTodos = async (req, res) => res.json(await Todo.findAll());

// Retrieve a single TODO item by ID
const getTodo = async (req, res) => {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Not found' });
    res.json(todo);
};

// Creates a new TODO item
const createTodo = async (req, res) => {
    const { name, deadline, points } = req.body;
    try {
        const newTodo = await Todo.create({ name, deadline, points });
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Deletes a TODO item by ID 
const deleteTodo = async (req, res) => {
    await Todo.destroy({ where: { id: req.params.id} });
    res.json({ message: 'Deleted successfully' });

};


module.exports = { getTodos, getTodo, createTodo, deleteTodo };