const { sequelize, Todo } = require("./model"); // Import models
require("dotenv").config();

const populateDB = async () => {
  try {
    await sequelize.sync(); // Ensure database structure is ready

    await Todo.bulkCreate([
      { name: "Complete project", deadline: "2025-04-01", points: 50 },
      { name: "Write documentation", deadline: "2025-04-05", points: 30 },
      { name: "Fix bugs", deadline: "2025-03-25", points: 20 },
    ]);

    console.log("Database populated successfully!");
    await sequelize.close();
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

populateDB();
