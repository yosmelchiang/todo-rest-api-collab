// const { Sequelize, DataTypes } = require("sequelize"); // Add DataTypes import
// require("dotenv").config();

// const Todo = sequelize.define(
//   "Todo",
//   {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         notEmpty: true,
//       },
//     },
//     deadline: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       validate: {
//         isDate: true,
//       },
//     },
//     points: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       validate: {
//         isInt: true,
//         min: 0,
//       },
//     },
//   },
//   {
//     timestamps: false,
//   }
// );

// module.exports = { sequelize, Todo }; // Export sequelize for initialization

const { Sequelize, DataTypes } = require("sequelize"); // Add DataTypes import
const db = require("../config/db");
require("dotenv").config();
const Todo = db.define("Todo", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  deadline: { type: DataTypes.DATE, allowNull: false },
  points: { type: DataTypes.INTEGER, allowNull: false },
}, {
    timestamps: false
});
module.exports = Todo;
