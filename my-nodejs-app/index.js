const express = require('express');
const multer = require('multer');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// กำหนด multer instance
const upload = multer();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // ใส่รหัสผ่านของ MySQL ที่ถูกต้อง
  database: 'productivity',
});

db.connect();



app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM sm1', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.status(200).json(result);
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
