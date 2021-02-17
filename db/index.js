const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "root",
  password: "TTTServer",
  database: "groceryList",
});

connection.connect();

module.exports = connection;
