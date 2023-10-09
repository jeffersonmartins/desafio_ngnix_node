const express = require('express');
const mysql = require('mysql2');
const peopleGenerator = require('./peopleGenerator')

const app = express();
const port = process.env.PORT_APP;

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect();

app.get('/', (req, res) => {


    const name = peopleGenerator();
    db.query('INSERT INTO people (name) VALUES (?)', [name], (error, results) => {


    });

    const sqlConsulta = 'SELECT name FROM people'; 

    db.query(sqlConsulta, (error, results, fields) => {
        if (error) throw error;

        let result = '<table>';
        for (let p of results) {
            result += `<tr><td>${p.name}</td></tr>`
        }

        result += '</table>'

        res.send(`<h1>Full Cycle Rocks!</h1><p>Lista de nomes cadastrada no banco de dados</p><pre>${result}</pre>`);
    })

});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});


