const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

// Local MySQL Database configuration
const db = mysql.createConnection({
    host: '127.0.0.1',     // Local MySQL
    user: 'root',
    password: 'your_password',
    database: 'appusers'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

app.get('/api/username', (req, res) => {
    db.query('SELECT username FROM users LIMIT 1', (err, results) => {
        if (err) {
            console.error('Error fetching username:', err);
            res.status(500).send('Error retrieving username');
            return;
        }
        res.json({ username: results[0]?.username || 'No user found' });
    });
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

