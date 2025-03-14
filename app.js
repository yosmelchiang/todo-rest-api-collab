require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;
const SECRET = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');

app.use(express.json()); //Parse JSON bodies
app.use('/todo', router); //We only have 1 main edpoint, so we set up a router to avoid repeating ourselves.

app.get('/', (req, res) => res.redirect('/todo')); //Our main endpoint is not being used, redirect straight to /todo

router.get('/', (req, res) => {
  res.status(200).json({ status: 'success', message: 'Retrieved a list of all todos' });
});

router.get('/:id', (req, res) => {
  const dummyDB = [{ id: 1, name: 'Walk the dog', deadline: '14.03.2025', points: 123 }]; //Just simulate a DB to create some error scenarios
  const id = Number(req.params.id); //its a string, we need to convert it to a number
  const todo = dummyDB.find((e) => e.id === id);

  todo
    ? res.status(200).json({ status: 'success', message: 'Retrieved a single todo', data: todo })
    : res.status(404).json({ status: 'fail', message: 'Todo not found' });
});

router.post('/', (req, res) => {
  const todo = req.body;

  res.status(201).json({ status: 'succes', message: 'Created a new todo', data: todo });
});

// router.delete

app.listen(PORT, () => {
  console.log(`App is up on http://localhost:${PORT}`);
});
