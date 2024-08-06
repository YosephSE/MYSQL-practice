const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "H@lleysql",
  database: "myacme",
});

db.connect((err) => (err ? console.log(err) : console.log("db connected")));

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.send(result);
  });
});

app.listen(5000, () => console.log("app listening on port 5000"));
