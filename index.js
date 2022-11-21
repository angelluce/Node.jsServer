const express = require('express');
const app = express();
const port = 5000;

app.get('/', function(req, res) {
    res.send({
        mensaje: '¡Node.js está ejecutándose!',
        estado: true,
    })
})

app.get('/inicio', (req, res) => {
    res.sendFile('/pages/index.html', { root: __dirname });
});

app.get('/resultados', (req, res) => {
    res.sendFile('/pages/results.html', { root: __dirname });
});

app.get('/posiciones', (req, res) => {
    res.sendFile('/pages/positions.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Node.js está ejecutándose en: localhost:${port}`);
});