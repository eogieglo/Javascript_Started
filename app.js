const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html')
});

app.listen(3000, function(req, res) {
    console.log('Servidor corriendo');
});