// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var burger = sequelize.define("burgerdb", {
  // the name of the character (a string)
  burger_name: Sequelize.STRING,
  // has the burger been devoured?
  devoured: Sequelize.BOOLEAN,
  // date to enter
  date: Sequelize.STRING
});

// Syncs with DB
burger.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = burger;