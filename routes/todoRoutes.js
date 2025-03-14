const express = require('express');
const { getTodos, getTodo, createTodo, deleteTodo } = require ('../services/todoService');
const router = express.Router();

router.get('/', getTodos);
router.get('/:id', getTodo);
router.post('/', createTodo);
router.delete('/:id', deleteTodo);

module.exports = router; 