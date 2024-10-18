const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "<RDS-endpoint>",
  user: "your-username",
  password: "your-password",
  database: "your-database-name",
});

app.post("/submit", (req, res) => {
  const { username, email, password } = req.body;
  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

  connection.query(sql, [username, email, password], (err, result) => {
    if (err) throw err;
    res.send("User data inserted successfully");
  });
});
