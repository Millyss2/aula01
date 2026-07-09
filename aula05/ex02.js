const input = require('readline-sync')

const express = require('express');
const app = express();
const PORT = 3000;

const listaProdutos = [
    { id: 1, nome: "Teclado Mecânico", preco: 250.00 },
    { id: 2, nome: "Mouse Óptico", preco: 89.90 },
    { id: 3, nome: "Monitor 24 Pol", preco: 850.00 },
    { id: 4, nome: "Mousepad Simples", preco: 35.00 }
];

app.get('/produtos', (req, res) => {
    res.json(listaProdutos);
});

