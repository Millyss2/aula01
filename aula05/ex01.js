const input = require('readline-sync')

const express = require('express');
const app = express();
const PORT = 3000;


app.get('/sobre', (req, res) => {
    res.json({
        nome: "Emilly",
        disciplina: "Back-end",
        ano: 2026
    });
});
