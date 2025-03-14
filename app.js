require("dotenv").config();
const express = require("express");
const app = express();
const populateDB = require("./populateTodoDb");

const todoRouter = require("./routes/todoRoutes.js");

const PORT = process.env.PORT || 3000;
const SECRET = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");

app.use(express.json()); //Parse JSON bodies
app.use("/todo", todoRouter); //We only have 1 main endpoint, so we set up a router to avoid repeating ourselves.

app.get("/", (req, res) => res.redirect("/todo")); //Our main endpoint is not being used, redirect straight to /todo

populateDB();

app.listen(PORT, () => {
  console.log(`App is up on http://localhost:${PORT}`);
});
