const express = require('express');
const { getTodos, getTodo, createTodo, deleteTodo } = require ('../services/todoService');
const router = express.Router();
const jwtVerify = require('../middlewares/authMiddleware.js')

// Gets all todo items 
router.get('/', jwtVerify, getTodos); 

// Gets a single todo item by id
router.get('/:id', jwtVerify, getTodo);

// Creates a new todo item 
router.post('/', jwtVerify, createTodo);

// Deletes a todo item by id 
router.delete('/:id', jwtVerify, deleteTodo);

module.exports = router; 