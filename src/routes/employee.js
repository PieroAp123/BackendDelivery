const express = require('express');
const router = express.Router();

const mysqlConnection = require('../app');

router.get('/users', (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (error, rows, fields) => {
        if(!error) {
            res.json(rows);
        } else {
            console.log(error);
        }
    });
});

router.get('/users/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM users WHERE id = ?', [id], (error, rows, fields) => {
        if(!error) {
            res.json(rows);
        } else {
            console.log(error);
        }
    });
});

module.exports = router;