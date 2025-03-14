const express = require('express');
const { getTodos, getTodo, createTodo, deleteTodo } = require ('../services/todoService');
const router = express.Router();

// Gets all todo items 
router.get('/', getTodos); 

// Gets a single todo item by id
router.get('/:id', getTodo);

// Creates a new todo item 
router.post('/', createTodo);

// Deletes a todo item by id 
router.delete('/:id', deleteTodo);

module.exports = router; 