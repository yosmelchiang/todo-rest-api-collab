require('dotenv').config();
const express = require('express');
const app = express();
const populateDB = require('./populateTodoDb');
const todoRouter = require('./routes/todoRoutes.js');
const PORT = process.env.PORT || 3000;
const SECRET = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
const swagger = require('swagger-ui-express');

const openapi = require('yamljs').load('./openapi.yaml');

app.use('/docs', swagger.serve, swagger.setup(openapi));

app.use(express.json()); //Parse JSON bodies
app.use('/todo', todoRouter); //We only have 1 main endpoint, so we set up a router to avoid repeating ourselves.

app.get('/', (req, res) => res.redirect('/docs')); //Our main endpoint is not being used, redirect straight to /docs

populateDB();

// Login route for generating JWT
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Instead of hardcodng we should connect it against a DB user
  if (username === 'sys' && password === 'password123') {  // Example hardcoded check
    const token = jwt.sign({ user: 'sys', role: 'admin' }, SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid Credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`App is up on http://localhost:${PORT}`);
});
