const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const PORT = 304;
const cors = require('cors');
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Venkatesh@91', // Change to your MySQL password
    database: 'alco',
    auth: {
        type: 'mysql_clear_password',
    },
});

db.connect((err) => {
    if (err) {
        console.error('Failed to connect to MySQL:', err);
        throw err;
    }
    console.log('Connected to MySQL');
});

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());

app.use((req, res, next) => {
    if (path.extname(req.path) === '.jsx') {
        res.type('application/javascript');
    }
    next();
});

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('./src/index.jsx', (req, res) => {
    res.type('application/javascript');
    res.sendFile(path.join(__dirname, 'src', 'index.jsx'));
});




app.post('/api/projects', (req, res) => {
    const { name } = req.body;
    console.log('Received project data:', name);

    const sql = 'INSERT INTO projecttable (name) VALUES (?)';
    db.query(sql, [name], (err, result) => {
        if (err) {
            console.error('Error adding project:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Project added successfully');
            res.status(201).json({ id: result.insertId, name }); // Change 'projectname' to 'name'
        }
    });
});


app.get('/api/projecttable', (req, res) => {
    const sql = 'SELECT * FROM projecttable';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching projects:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json(results);
        }
    });
});

app.post('/api/tasks', (req, res) => {
    const { task_name, start_date, deadline, status } = req.body;
    console.log('Received task data:', { task_name, start_date, deadline, status });

    const sql = 'INSERT INTO taskess (task_name, start_date, deadline, status) VALUES (?, ?, ?, ?)';
    db.query(sql, [task_name, start_date, deadline, status], (err, result) => {
        if (err) {
            console.error('Error adding task:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Task added successfully');
            res.status(201).json({ id: result.insertId, task_name, start_date, deadline, status });
        }
    });
});

app.get('/api/tasks', (req, res) => {
    const sql = 'SELECT * FROM taskess';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching tasks:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json(results);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});