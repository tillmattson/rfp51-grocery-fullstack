const mysql = require("mysql");

const connection = mysql.createConnection({
  user: "",
  password: "",
  database: "",
});

connection.connect();

module.exports = connection;
