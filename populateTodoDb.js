require("dotenv").config();
const sequelize = require("./config/db"); // Import database connection
const Todo = require("./models/Todo"); // Import Todo model

const populateDB = async () => {
  try {
    await sequelize.authenticate(); // Ensure database connection
    console.log("Database connected successfully.");

    await sequelize.sync({ alter: true }); // Sync schema without dropping data

    await Todo.bulkCreate([
      { name: "Complete project", deadline: "2025-04-01", points: 50 },
      { name: "Write documentation", deadline: "2025-04-05", points: 30 },
      { name: "Fix bugs", deadline: "2025-03-25", points: 20 },
    ]);

    console.log("Database populated successfully!");
  
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

module.exports = populateDB;
