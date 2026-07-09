const input = require('readline-sync')

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/status', (req, res) => {
    res.status(200).json({
        online: true,
        mensagem: "Servidor rodando perfeitamente."
    });
});


