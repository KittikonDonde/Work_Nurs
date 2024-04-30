const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // ใส่รหัสผ่านของ MySQL ที่ถูกต้อง
    database: 'datanurse',
});

app.get('/api/data', (req, res) => {
  connection.query('SELECT actual_workplace, COUNT(*) AS count FROM nurse4 GROUP BY actual_workplace', (error, results, fields) => {
    if (error) {
      console.error('Error fetching data from MySQL: ' + error.stack);
      res.status(500).json({ error: 'Error fetching data from MySQL' });
      return;
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
