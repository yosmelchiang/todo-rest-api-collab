const { Sequelize, DataTypes } = require("sequelize"); // Add DataTypes import
require("dotenv").config();

const Todo = sequelize.define(
  "Todo",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 0,
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = { sequelize, Todo }; // Export sequelize for initialization
